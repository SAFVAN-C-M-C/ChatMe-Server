import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerDetailsValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";

import { RegisterDetails } from "@/domain/entities/RegisterDetails";

export const addRegisterDetailsController = (dependencies: IDependencies) => {
  const {
    useCases: { addRegisterDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const registerCredentials: any = req.body;
    console.log(
      "🚀 ~ file: signup.ts:15 ~ return ~ userCredentials:",
      registerCredentials
    );

    if (registerCredentials) {
      try {
        const { error, value } = registerDetailsValidation.validate(registerCredentials);
        // if (error) {
        //   throw new Error(error.message);
        // }
        let token=req.user
        let data:RegisterDetails={
          email:token?.email,
          name:registerCredentials?.data?.name,
          accountType:registerCredentials?.data?.accountType,
          location:registerCredentials?.data?.location,
          phone:registerCredentials?.data?.phone,
        }
        console.log(data);
        
        const userData = await addRegisterDetailsUseCase(dependencies).execute(data);

        if (!userData) {
          return res.json({
            success: false,
            message: "Something Went wrong try again in create user",
          });
        }
        //produce-user-creation-message
        // await userCreatedProducer(userData,'USER_SERVICE_TOPIC');

        const accessToken = generateAccessToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: true,
          isDetailsComplete:userData?.isDetailsComplete,
        isEmailVerified:userData?.isEmailVerified
        });

        const refreshToken = generateRefreshToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: true,
          isDetailsComplete:userData?.isDetailsComplete,
        isEmailVerified:userData?.isEmailVerified
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });
        
        const user = await findUserByEmailUseCase(dependencies).execute(token?.email);
        delete user?.password
        console.log("data before going",user);
        
        res.status(200).json({
          success: true,
          data: user,
          message: "User created!",
          loggined:true,
          detailsFilled:userData?.isDetailsComplete,
        });
      } catch (error: any) {
        console.log(error, "<<Something went wrong in user signup>>");
      }
    }
  };
};

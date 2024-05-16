import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerDetailsValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";
import { userCreatedOtpProducer } from "@/infrastructure/kafka/producer";
import { RegisterDetails } from "@/domain/entities/RegisterDetails";

export const addRegisterDetailsController = (dependencies: IDependencies) => {
  const {
    useCases: { addRegisterDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const registerCredentials: RegisterDetails = req.body;
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
        let data={
          userId:token?._id,
          email:token?.email,
          ...registerCredentials
        }
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
        });

        const refreshToken = generateRefreshToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: true,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });

        res.status(200).json({
          success: true,
          data: userData,
          message: "User created!",
        });
      } catch (error: any) {
        console.log(error, "<<Something went wrong in user signup>>");
      }
    }
  };
};

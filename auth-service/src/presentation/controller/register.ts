import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential, UserEntity } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";
import { requestOTP } from "@/infrastructure/kafka/producer";

export const registerController = (dependencies: IDependencies) => {
  const {
    useCases: { registerUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("hello");
    
    let userData:UserEntity|null=null
    const registerCredentials: LoginCredential = req.body;
    console.log(
      "🚀 ~ file: signup.ts:15 ~ return ~ userCredentials:",
      registerCredentials
    );

    //To check whether the user email is taken or not
    if (registerCredentials) {
      try {
        const userExist: any = await findUserByEmailUseCase(
          dependencies
        ).execute(registerCredentials.email);
        console.log("🚀 ~ file: signup.ts:28 ~ return ~ userExist:", userExist);
        if (userExist) {
          return next(
            ErrorResponse.conflict(
              "Email is already resgitered, try another email"
            )
          );
        }
      } catch (error: any) {
        console.log(error, "Something went Wrong");
        next(error);
      }
    }
    if (registerCredentials) {
      try {
        const { error, value } = registerValidation.validate(req.body);
        if (error) {
          throw new Error(error.message);
        }
        value.password = await hashPassword(value.password);

        userData = await registerUserUseCase(dependencies).execute(
          value.email,
          value.password
        );

        if (!userData) {
          return res.json({
            success: false,
            message: "Something Went wrong try again in create user",
          });
        }
        await requestOTP(registerCredentials.email, "notification-service-topic");
        const accessToken = generateAccessToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: false,
          isDetailsComplete:userData?.isDetailsComplete,
          isEmailVerified:userData?.isEmailVerified
        });

        const refreshToken = generateRefreshToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: false,
          isDetailsComplete:userData?.isDetailsComplete,
          isEmailVerified:userData?.isEmailVerified
        });
        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          message: "user creeated otp sent successfully",
          data:{email:userData?.email!,otp:true,details:false,otpType:"register"}
        });
      } catch (error: any) {
        console.log(error, "<<Something went wrong in user signup>>");
      }
    }    
  };
};

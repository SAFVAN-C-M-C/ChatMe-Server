import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import {
  generateAccessToken,
  generateForgotPasswordToken,
  generateRefreshToken,
} from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential, UserEntity } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";
import { addUser, requestOTP } from "@/infrastructure/kafka/producer";

export const registerController = (dependencies: IDependencies) => {
  const {
    useCases: { registerUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    let userData: UserEntity | null = null;
    const registerCredentials: LoginCredential = req.body;

    //To check whether the user email is taken or not
    if (registerCredentials) {
      try {
        const userExist: any = await findUserByEmailUseCase(
          dependencies
        ).execute(registerCredentials.email);

        if (userExist) {
          return next(
            ErrorResponse.conflict(
              "Email is already resgitered, try another email"
            )
          );
        }
      } catch (error: any) {
        console.error(error, "Something went Wrong");
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

        await requestOTP(
          registerCredentials.email,
          "notification-service-topic"
        );
        const userDataToProfile = {
          userId: userData._id,
          email: userData.email,
        };

        await addUser(userDataToProfile, "profile-service-topic");
        const accessToken = generateForgotPasswordToken({
          email: userData?.email!,
          details: false,
          otp: true,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
          maxAge: 6000 * 60,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'none' // Allow cookies to be sent cross-origin
        });
        return res.status(200).json({
          success: true,
          message: "user creeated otp sent successfully",
          data: {
            email: userData?.email!,
            otp: true,
            details: false,
            otpType: "register",
          },
        });
      } catch (error: any) {
        console.error(error, "<<Something went wrong in user signup>>");
      }
    }
  };
};

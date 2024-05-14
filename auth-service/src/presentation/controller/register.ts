import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";
import { userCreatedOtpProducer } from "@/infrastructure/kafka/producer";

export const registerController = (dependencies: IDependencies) => {
  const {
    useCases: { registerUserUseCase, createOTP },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
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

    // sent otp to user using nodemailer
    if (registerCredentials) {
      try {
        const OTP: any = await createOTP(dependencies).execute(
          registerCredentials?.email
        );

        let data = {
          email: registerCredentials.email,
          otp: String(OTP?.otp),
        };
        await userCreatedOtpProducer(data, "notification-service-topic");
        return res.status(200).json({
          success: true,
          message: "otp sent successfully",
        });
      } catch (error: any) {
        console.log(error, "Something Went Wrong in OTP section");
        return res.json({
          success: false,
          message: "Something went wrong in otp",
        });
      }
    }

    if (registerCredentials) {
      try {
        const { error, value } = registerValidation.validate(req.body);
        if (error) {
          throw new Error(error.message);
        }
        value.password = await hashPassword(value.password);

        const userData = await registerUserUseCase(dependencies).execute(
          value.email,
          value.password
        );

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
          loggined: false,
        });

        const refreshToken = generateRefreshToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: false,
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

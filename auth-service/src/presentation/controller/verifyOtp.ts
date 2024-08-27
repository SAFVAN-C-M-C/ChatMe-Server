import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

import { ErrorResponse } from "@/_lib/common/error";
import { User } from "@/infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";
import { generateAccessToken, generateForgotPasswordToken } from "@/_lib/jwt";

export const otpConroller = (dependencies: IDependencies) => {
  const {
    useCases: { verifyOtpUseCase, updateUserFieldUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { otp, type } = req.body;
      let token = req.user;

      if (!otp) {
        throw new Error("Enter OTP");
      }
      const result = await verifyOtpUseCase(dependencies).execute(
        token?.email!,
        otp
      );

      if (!result) {
        return next(ErrorResponse.conflict("Wrong OTP please try again"));
      }

      if (type && type === "register") {
        const userData = await updateUserFieldUseCase(dependencies).execute(
          token?.email!,
          "isEmailVerified",
          true
        );

        const accessToken = generateForgotPasswordToken({
          email: token?.email!,
          details: true,
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
          data: {
            email: token?.email!,
            otp: true,
            details: true,
            otpType: "register",
          },
          message: "Otp Verified",
        });
      } else if (type && type === "forgot") {
        const accessToken = generateForgotPasswordToken({
          email: token?.email!,
          reset: true,
          otp: true,
        });
        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          data: {
            email: token?.email!,
            reset: true,
            otp: true,
            otpType: "forgot",
          },
          message: "Otp verified",
        });
      }
    } catch (error: any) {
      next(error);
    }
  };
};

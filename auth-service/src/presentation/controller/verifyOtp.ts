import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { registerValidation } from "@/_lib/validation";
import { comparePassword } from "@/_lib/bcrypt";
import {ErrorResponse} from "@/_lib/common/error"

export const loginController = (dependencies: IDependencies) => {
  const {
    useCases: { verifyOtpUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {otp}=req.body
      let token =req.cookies.access_token

      if (otp) {
        throw new Error("Enter OTP");
      }
      const result = await verifyOtpUseCase(dependencies).execute(
        token.email,
        otp
      );
      if (!result) {
        return next(ErrorResponse.unauthorized("Wrong OTP please try again"));
    }

    

    

    //   const accessToken = generateAccessToken({
        
    // });

    // const refreshToken = generateRefreshToken({
    //     _id: String(result?._id),
    //     email: result?.email!,
    //     role: result?.role!,
    //     type: result?.accountType!,
    //     loggined:true
    // });

    // res.cookie("access_token", accessToken, {
    //     httpOnly: true
    // });

    // res.cookie("refresh_token", refreshToken, {
    //     httpOnly: true
    // });

    res.status(200).json({
        success: true,
        data: result,
        message: "Login successful!"
    });
    } catch (error: any) {
        next(error);
    }
  };
};

import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

import { ErrorResponse } from "@/_lib/common/error";
import { User } from "@/infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";
import { generateAccessToken } from "@/_lib/jwt";


export const otpConroller = (dependencies: IDependencies) => {
  const {
    useCases: { verifyOtpUseCase,updateUserFieldUseCase,findUserByEmailUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("jkhfjksdn");
      
      const { otp,type } = req.body;
      let token = req.user;
      console.log(token,"=============token===============");

      if (!otp) {
        throw new Error("Enter OTP");
      }
      const result = await verifyOtpUseCase(dependencies).execute(
        token?.email!,
        otp
      );
      console.log("hello");
      
      if (!result) {
        return next(ErrorResponse.unauthorized("Wrong OTP please try again"));
      }
      
      if (type && type === "register") {
        const userData=await updateUserFieldUseCase(dependencies).execute(token?.email!,"isEmailVerified",true)
        
        const accessToken = generateAccessToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: false,
          isDetailsComplete:userData?.isDetailsComplete,
          isEmailVerified:userData?.isEmailVerified
        });
        const refreshToken = generateAccessToken({
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
          data: userData,
          message: "Otp Verified",
        });
      }else if(type && type==="login"){
        const userData=findUserByEmailUseCase(dependencies).execute(token?.email!)
        const accessToken = { ...token, loggined: true };
        const refreshToken = { ...token, loggined: true };
        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });
        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          data: userData,
          message: "Login successfull",
        });
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Otp Verified",
      });
    } catch (error: any) {
      next(error);
    }
  };
};

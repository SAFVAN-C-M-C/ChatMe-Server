import { Request, Response, NextFunction } from "express";
import { generateRefreshToken, generateAccessToken } from "@/_lib/jwt";

import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuthController = (dependencies: IDependencies) => {
  const {
    useCases: { registerUserUseCase, findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { credential } = req.body;

      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload || !payload.email) {
        return res.status(400).json({
          success: false,
          message:
            "Google token is invalid or does not contain an email address.",
        });
      }

      const { email } = payload;

      const user = await findUserByEmailUseCase(dependencies).execute(email,true);

      if (user) {
        const accessToken = generateAccessToken({
          _id: String(user?._id),
          email: user?.email!,
          role: user?.role!,
          type: user?.accountType!,
            loggined:true,
            isDetailsComplete:user?.isDetailsComplete,
          isEmailVerified:user?.isEmailVerified
        });

        const refreshToken = generateRefreshToken({
          _id: String(user?._id),
          email: user?.email!,
          role: user?.role!,
          type: user?.accountType!,
          loggined:true,
          isDetailsComplete:user?.isDetailsComplete,
          isEmailVerified:user?.isEmailVerified
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });
        const { password, ...userData } = user;
        return res.status(200).json({
          success: true,
          data: userData,
          message: "User Google login!",
        });
      }
console.log("hi therer==========");

      const result = await registerUserUseCase(dependencies).execute(String(email),"",true);

      
      if (!result) {
        throw new Error("User creation failed!");
      }

     


      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined:false,
        isDetailsComplete:result?.isDetailsComplete,
        isEmailVerified:result?.isEmailVerified
      });

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined:false,
        isDetailsComplete:result?.isDetailsComplete,
        isEmailVerified:result?.isEmailVerified
      });


      res.cookie("access_token", accessToken, {
        httpOnly: true,
      });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
      });
      const {password,...userData}=result
      res.status(200).json({
        success: true,
        data: userData,
        message: "User Google signup!",
      });
    } catch (error: any) {
      next(error);
    }
  };
};

import { Request, Response, NextFunction } from "express";
import { generateRefreshToken, generateAccessToken } from "@/_lib/jwt";

import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";
import { OAuth2Client } from "google-auth-library";
import { addUser } from "@/infrastructure/kafka/producer";
import { ErrorResponse } from "@/_lib/common/error";
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

      const user = await findUserByEmailUseCase(dependencies).execute(
        email,
        true
      );

      if (user) {
        if (user.isBlocked) {
          return next(ErrorResponse.unauthorized("User is Blocked"));
        }
        const accessToken = generateAccessToken({
          _id: String(user?._id),
          email: user?.email!,
          role: user?.role!,
          type: user?.accountType!,
          loggined: true,
          isDetailsComplete: user?.isDetailsComplete,
          isEmailVerified: user?.isEmailVerified,
        });

        const refreshToken = generateRefreshToken({
          _id: String(user?._id),
          email: user?.email!,
          role: user?.role!,
          type: user?.accountType!,
          loggined: true,
          isDetailsComplete: user?.isDetailsComplete,
          isEmailVerified: user?.isEmailVerified,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
          maxAge: 6000 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'none' // Allow cookies to be sent cross-origin
        });
        
        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
          maxAge: 6000 * 60 * 24 * 15,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'none' // Allow cookies to be sent cross-origin
        });
        delete user.password;
        return res.status(200).json({
          success: true,
          data: user,
          message: "User Google login!",
          loggined: true,
          detailsFilled: user?.isDetailsComplete,
        });
      }

      const result = await registerUserUseCase(dependencies).execute(
        String(email),
        "",
        true
      );

      if (!result) {
        throw new Error("User creation failed!");
      }

      const userDataToProfile = {
        userId: result._id,
        email: result.email,
      };

      await addUser(userDataToProfile, "profile-service-topic");

      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined: false,
        isDetailsComplete: result?.isDetailsComplete,
        isEmailVerified: result?.isEmailVerified,
      });

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined: false,
        isDetailsComplete: result?.isDetailsComplete,
        isEmailVerified: result?.isEmailVerified,
      });

      res.cookie("access_token", accessToken, {
        httpOnly: true,
        maxAge: 6000 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
      });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 6000 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
      });
      const { password, ...userData } = result;
      res.status(200).json({
        success: true,
        data: { email: userData?.email, details: true },
        message: "User Google signup!",
      });
    } catch (error: any) {
      next(error);
    }
  };
};

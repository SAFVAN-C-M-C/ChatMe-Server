import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { registerValidation } from "@/_lib/validation";
import { comparePassword } from "@/_lib/bcrypt";
import { ErrorResponse } from "@/_lib/common/error";

export const loginController = (dependencies: IDependencies) => {
  const {
    useCases: { loginUserUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = registerValidation.validate(req.body);

      if (error) {
        throw new Error(error.message);
      }
      const result = await loginUserUseCase(dependencies).execute(
        value.email,
        value.password
      );
      if (!result) {
        return next(
          ErrorResponse.unauthorized(
            "We couldn't find an account with that email address"
          )
        );
      }

      const match = await comparePassword(value.password, result.password!);

      if (!match) {
        return next(
          ErrorResponse.unauthorized("Incorrect password. Please try again.")
        );
      }
      if (result.isBlocked) {
        return next(ErrorResponse.unauthorized("Account Blocked By admin"));
      }
      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined: result?.isDetailsComplete,
        isDetailsComplete: result?.isDetailsComplete,
        isEmailVerified: result?.isEmailVerified,
      });

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
        type: result?.accountType!,
        loggined: result?.isDetailsComplete,
        isDetailsComplete: result?.isDetailsComplete,
        isEmailVerified: result?.isEmailVerified,
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

      res.status(200).json({
        success: true,
        data: result,
        message: "Login successful!",
        loggined: true,
        detailsFilled: result?.isDetailsComplete,
      });
    } catch (error: any) {
      next(error);
    }
  };
};

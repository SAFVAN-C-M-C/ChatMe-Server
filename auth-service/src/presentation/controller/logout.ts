import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction, CookieOptions } from "express";

export const logoutController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cookieOptions: CookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      };

      res.clearCookie("access_token", cookieOptions);
      res.clearCookie("refresh_token", cookieOptions);

      res.status(204).json({});
    } catch (error) {
      next(error);
    }
  };
};

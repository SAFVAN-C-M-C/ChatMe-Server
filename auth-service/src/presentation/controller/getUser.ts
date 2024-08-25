import { ErrorResponse } from "@/_lib/common/error";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const result = await findUserByIdUseCase(dependencies).execute(
        req.user._id
      );

      if (!result) {
        throw new Error("User not found!");
      }
      if (result.isBlocked) {
        return next(ErrorResponse.unauthorized("User is Blocked"));
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "User exist!",
        loggined: result?.isDetailsComplete,
      });
    } catch (error) {
      next(error);
    }
  };
};

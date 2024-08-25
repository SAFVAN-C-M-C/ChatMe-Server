import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserDetailsByUserIdController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { getUserDetailsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      if (!req.params.userId) {
        throw new Error("User not found");
      }
      const result = await getUserDetailsByUserIdUseCase(dependencies).execute(
        String(req.params.userId)
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "User Profile Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

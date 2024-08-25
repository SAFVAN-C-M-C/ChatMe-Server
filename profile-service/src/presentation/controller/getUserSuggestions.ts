import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserSuggestionsController = (dependencies: IDependencies) => {
  const {
    useCases: { getUserSuggestionsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const result = await getUserSuggestionsUseCase(dependencies).execute(
        String(req.user._id)
      );

      res.status(200).json({
        success: true,
        data: result,
        message: "User suggestions Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getSavedPostController = (dependencies: IDependencies) => {
  const {
    useCases: { getSavedPostUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const result = await getSavedPostUseCase(dependencies).execute(
        String(req.user._id)
      );

      if (!result) {
        throw new Error("No post found");
      }

      res.status(200).json({
        success: true,
        data: result[0],
        message: "Saved Posts fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

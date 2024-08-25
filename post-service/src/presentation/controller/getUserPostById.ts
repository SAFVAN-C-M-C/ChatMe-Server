import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const getUserPostByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getPostsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const userId = req.params.userId;
      const result = await getPostsByUserIdUseCase(dependencies).execute(
        String(userId)
      );
      res.status(200).json({
        success: true,
        data: result,
        message: "User Posts fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

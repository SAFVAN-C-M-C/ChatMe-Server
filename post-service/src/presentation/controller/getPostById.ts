import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const getPostByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getPostByIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const postId = req.params.postId;
      const result = await getPostByIdUseCase(dependencies).execute(
        String(postId)
      );
      res.status(200).json({
        success: true,
        data: result,
        message: "Post fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

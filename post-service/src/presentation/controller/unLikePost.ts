import { IDependencies } from "@/application/interfaces/IDependencies";
import {
  CreatePostCredentials,
  EditPostCredentials,
  ILikePost,
} from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const unLikePostController = (dependencies: IDependencies) => {
  const {
    useCases: { unLikePostUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.postId) {
        throw new Error("post not provided");
      }

      const data: ILikePost = {
        userId: String(req.user._id),
        postId: req.params.postId,
      };
      const editedPost = await unLikePostUseCase(dependencies).execute(data);

      if (!editedPost) {
        throw new Error("post liking failed");
      }
      res.status(200).json({
        success: true,
        data: editedPost,
        message: "Post Unliked",
      });
    } catch (error) {
      next(error);
    }
  };
};

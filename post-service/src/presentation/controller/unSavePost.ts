import { IDependencies } from "@/application/interfaces/IDependencies";
import {
  CreatePostCredentials,
  EditPostCredentials,
  ILikePost,
  SavePostCredentials,
} from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const unSavePostController = (dependencies: IDependencies) => {
  const {
    useCases: { unSavePostUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.postId) {
        throw new Error("post not provided");
      }

      const data: SavePostCredentials = {
        userId: String(req.user._id),
        postId: req.params.postId,
      };
      const savedPost = await unSavePostUseCase(dependencies).execute(data);

      if (!savedPost) {
        throw new Error("post unsaving failed");
      }
      res.status(200).json({
        success: true,
        data: savedPost,
        message: "Post Saved",
      });
    } catch (error) {
      next(error);
    }
  };
};

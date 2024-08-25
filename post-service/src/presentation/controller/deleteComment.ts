import { IDependencies } from "@/application/interfaces/IDependencies";
import {
  AddCommentCredentials,
  CreatePostCredentials,
  DeleteComment,
  EditPostCredentials,
} from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const deleteCommentController = (dependencies: IDependencies) => {
  const {
    useCases: { deleteCommentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { commentId } = req.params;

      const data: DeleteComment = {
        commentId: String(commentId),
        userId: String(req.user._id),
      };
      const createdPost = await deleteCommentUseCase(dependencies).execute(
        data
      );

      if (!createdPost) {
        throw new Error("comment deletion failed");
      }

      res.status(200).json({
        success: true,
        data: createdPost,
        message: "Comment deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

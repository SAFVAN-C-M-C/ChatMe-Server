
import { IDependencies } from "@/application/interfaces/IDependencies";
import { AddCommentCredentials, CreatePostCredentials, DeleteComment, EditPostCredentials } from "@/domain/entities";
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
      if(!req.body.commentId){
        throw new Error("commentId not provided");
      }
      if(!req.body.postId){
        throw new Error("postId not provided");
      }

      const data:DeleteComment={
        commentId:String(req.body.commentId),
        postId:String(req.body.postId),
        userId:String(req.user._id)
      }
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

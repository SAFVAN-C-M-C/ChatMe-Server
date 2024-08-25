import { IDependencies } from "@/application/interfaces/IDependencies";
import {
  AddCommentCredentials,
  CreatePostCredentials,
  EditPostCredentials,
} from "@/domain/entities";
import { createCommentNotification } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const addCommentController = (dependencies: IDependencies) => {
  const {
    useCases: { addCommentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const userId = req.user._id;

      const { comment, name, postId, userAvatar, replyId } = req.body;
      if (!comment || !name || !postId || !userAvatar) {
        throw new Error("Essential data not provided");
      }
      const data: AddCommentCredentials = {
        comment: String(comment),
        name: String(name),
        postId: String(postId),
        userAvatar: String(userAvatar),
        userId,
      };
      if (typeof replyId === "string" && replyId !== "") {
        data.replyId = replyId;
      }
      const addedComment = await addCommentUseCase(dependencies).execute(data);

      if (!addedComment) {
        throw new Error("post creatin failed");
      }
      const { newComment, recipientId } = addedComment;
      const dataForCommentNotification = {
        recipientId: String(recipientId),
        fromUserId: String(newComment.userId),
        content: String(newComment.comment),
        postId: String(newComment.postId),
      };
      await createCommentNotification(
        dataForCommentNotification,
        "notification-service-topic"
      );
      res.status(200).json({
        success: true,
        data: newComment,
        message: "Comment Added",
      });
    } catch (error) {
      next(error);
    }
  };
};

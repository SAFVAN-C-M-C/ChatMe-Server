
import { IDependencies } from "@/application/interfaces/IDependencies";
import { AddCommentCredentials, CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
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
      if(!req.body.comment){
        throw new Error("comment not provided");
      }
      if(!req.body.comment){
        throw new Error("comment not provided");
      }
      if(!req.body.name){
        throw new Error("name not provided");
      }
      if(!req.body.postId){
        throw new Error("postId not provided");
      }
      if(!req.body.userAvatar){
        throw new Error("userAvatar not provided");
      }
      const data:AddCommentCredentials={
        comment:String(req.body.comment),
        name:String(req.body.name),
        postId:String(req.body.postId),
        userAvatar:String(req.body.userAvatar),
        userId:String(req.user._id)
      }
      const createdPost = await addCommentUseCase(dependencies).execute(
        data
      );

      if (!createdPost) {
        throw new Error("post creatin failed");
      }
      const dataForCommentNotification={
        recipientId:String(createdPost.post.userId),
        fromUserId:String(data.userId),
        content:String(data.comment),
        postId:String(data.postId),
      }
      await createCommentNotification(dataForCommentNotification,"notification-service-topic")
      res.status(200).json({
        success: true,
        data: createdPost.id,
        message: "Post created",
      });
    } catch (error) {
      next(error);
    }
  };
};

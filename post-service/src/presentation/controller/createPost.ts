
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";


export const createPostController = (dependencies: IDependencies) => {
  const {
    useCases: { createPostuseCase,getPostsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if(!req.body.content){
        console.log("Content not provided");
        
        throw new Error("Content not provided");
      }
      if(!req.body.media){
        console.log("media not provided");
        
        throw new Error("media not provided");
      }
      if(!req.body.name){
        console.log("name not provided");
        
        throw new Error("name not provided");
      }
      const data:CreatePostCredentials={
        email:req.body?.email?String(req.body?.email): String(req.user.email),
        userId:req.body?.userId?String(req.body?.userId): String(req.user._id),
        content:req.body.content,
        media:req.body.media,
        name:req.body.name,
        userAvatar:req.body.userAvatar
      }
      const createdPost = await createPostuseCase(dependencies).execute(
        data
      );

      if (!createdPost) {
        throw new Error("post creatin failed");
      }
      const result=await getPostsByUserIdUseCase(dependencies).execute(String(data.userId))
      res.status(200).json({
        success: true,
        data: result,
        message: "Recruiter accepted",
      });
    } catch (error) {
      next(error);
    }
  };
};

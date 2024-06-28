
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";


export const deltedPostController = (dependencies: IDependencies) => {
  const {
    useCases: { deletePostUseCase,getPostsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      if(!req.body._id){
        throw new Error("Post not found");
      }
      
      const deletedPost = await deletePostUseCase(dependencies).execute(
        String(req.body._id)
      );

      if (!deletedPost) {
        throw new Error("post deletion failed");
      }
      const result=await getPostsByUserIdUseCase(dependencies).execute(String(req.user._id))
      res.status(200).json({
        success: true,
        data: result,
        message: "Post deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

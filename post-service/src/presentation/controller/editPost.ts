import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const editPostController = (dependencies: IDependencies) => {
  const {
    useCases: { editPostUseCase, getPostsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.body.content) {
        throw new Error("Content not provided");
      }

      const data: EditPostCredentials = {
        _id: String(req.body?._id),
        content: req.body.content,
      };
      const createdPost = await editPostUseCase(dependencies).execute(data);

      if (!createdPost) {
        throw new Error("post creatin failed");
      }
      const result = await getPostsByUserIdUseCase(dependencies).execute(
        String(req.user._id)
      );
      res.status(200).json({
        success: true,
        data: result,
        message: "Post edited",
      });
    } catch (error) {
      next(error);
    }
  };
};

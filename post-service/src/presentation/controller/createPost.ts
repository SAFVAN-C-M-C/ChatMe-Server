import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatePostCredentials } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const createPostController = (dependencies: IDependencies) => {
  const {
    useCases: { createPostuseCase, getPostsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { content, media, name, tags, userAvatar } = req.body;
      if (!content) {
        throw new Error("Content not provided");
      }
      if (!media) {
        throw new Error("media not provided");
      }
      if (!name) {
        throw new Error("name not provided");
      }
      const data: CreatePostCredentials = {
        email: String(req.user.email),
        userId: String(req.user._id),
        content,
        media,
        name,
        userAvatar,
        tags,
      };
      const createdPost = await createPostuseCase(dependencies).execute(data);

      if (!createdPost) {
        throw new Error("post creatin failed");
      }
      const result = await getPostsByUserIdUseCase(dependencies).execute(
        String(data.userId)
      );
      res.status(200).json({
        success: true,
        data: result,
        message: "Post Created",
      });
    } catch (error) {
      next(error);
    }
  };
};

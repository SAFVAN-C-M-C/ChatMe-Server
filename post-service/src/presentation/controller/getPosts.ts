import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const getPostsController = (dependencies: IDependencies) => {
  const {
    useCases: { getPostsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const result = await getPostsUseCase(dependencies).execute({
        page,
        limit,
      });
      res.status(200).json({
        success: true,
        data: result?.posts,
        totalPages: Math.ceil(result?.total! / limit),
        message: "Posts fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

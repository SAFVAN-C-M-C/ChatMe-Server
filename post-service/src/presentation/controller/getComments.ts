import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const getCommentsController = (dependencies: IDependencies) => {
  const {
    useCases: { getCommentsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { postId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 9;

      const result = await getCommentsUseCase(dependencies).execute({
        postId,
        page,
        limit,
      });
      res.status(200).json({
        success: true,
        data: result?.comments,
        totalPages: Math.ceil(result?.total! / limit),
        message: "Comments fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

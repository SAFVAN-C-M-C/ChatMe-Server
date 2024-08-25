import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const getCommentReplysController = (dependencies: IDependencies) => {
  const {
    useCases: { getCommentReplysUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { replyId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await getCommentReplysUseCase(dependencies).execute({
        replyId,
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


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
      const result=await getPostsUseCase(dependencies).execute()
      res.status(200).json({
        success: true,
        data: result,
        message: "Posts fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

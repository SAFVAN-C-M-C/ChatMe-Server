import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getRecruiterRequestController = (dependencies: IDependencies) => {
  const {
    useCases: { getRecruiterRequestUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const page = parseInt(req.query.page as string) || 1; // Current page number, default to 1
      const limit = parseInt(req.query.limit as string) || 10; // Number of users per page, default to 10

      const result = await getRecruiterRequestUseCase(dependencies).execute(
        page,
        limit
      );

      if (!result) {
        throw new Error("Can't get recruiter requests at the moment");
      }
      const { totalPages, currentPage, data } = result;
      res.status(200).json({
        success: true,
        totalPages,
        currentPage,
        data,
        message: "Recruiter requests Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

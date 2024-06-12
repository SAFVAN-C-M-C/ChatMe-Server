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
      const result = await getRecruiterRequestUseCase(dependencies).execute();

      if (!result) {
        console.log("no users");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Recruiter Requests Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

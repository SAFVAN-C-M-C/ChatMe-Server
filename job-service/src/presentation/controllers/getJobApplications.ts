import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getJobApplicationsController = (dependencies: IDependencies) => {
  const {
    useCases: { getJobApplicationsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      
      const { jobId } = req.params;
      const { status } = req.query;
      if (typeof status !== 'string') {
        throw new Error("Invalid status");
      }
      const data={
        jobId,
        status,
        userId:String(req.user._id)
      }
      const result = await getJobApplicationsUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("No data found");
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "Job data Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

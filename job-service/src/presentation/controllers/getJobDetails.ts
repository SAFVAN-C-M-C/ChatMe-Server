import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getJobDetailsController = (dependencies: IDependencies) => {
  const {
    useCases: { getJobDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.jobId) {
        throw new Error("Job id not provided.");
      }
      const jobs = await getJobDetailsUseCase(dependencies).execute(
        String(req.params.jobId)
      );
      if (!jobs) {
        console.log("no jobs found");
        throw new Error("no jobs found");
      }

      res.status(200).json({
        success: true,
        data: jobs,
        message: "Job fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

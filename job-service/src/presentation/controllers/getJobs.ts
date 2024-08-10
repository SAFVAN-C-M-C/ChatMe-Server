import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const getJobsController = (dependencies: IDependencies) => {
  const {
    useCases: { getJobsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      let {filter}=req.query
      if (typeof filter !== 'string') {
        filter='all'
      }
      const jobs = await getJobsUseCase(dependencies).execute(String(filter));

      if (!jobs) {
        console.log("no jobs found");
        throw new Error("no jobs found")
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

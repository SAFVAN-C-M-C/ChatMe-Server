import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getJobsByUserIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getJobsByUserIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.userId) {
        throw new Error("userId not provided");
      }

      const jobs = await getJobsByUserIdUseCase(dependencies).execute(
        String(req.params.userId)
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

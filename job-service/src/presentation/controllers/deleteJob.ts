import { IDependencies } from "@/application/interfaces/IDependencies";
import { ICreateJob, IEditJob } from "@/domain/entities/Jobs";

import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const deleteJobController = (dependencies: IDependencies) => {
  const {
    useCases: { deletejobUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.jobId) {
        throw new Error("jobId not provided");
      }


      const data={
        jobId:String(req.params.jobId),
        userId:String(req.user._id),
      }

      const deletedJobPost = await deletejobUseCase(dependencies).execute(data);

      if (!deletedJobPost) {
        throw new Error("post updating failed");
      }

      res.status(200).json({
        success: true,
        data: deletedJobPost,
        message: "Job deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

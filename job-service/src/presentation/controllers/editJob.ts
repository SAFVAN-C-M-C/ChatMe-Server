import { IDependencies } from "@/application/interfaces/IDependencies";
import { ICreateJob, IEditJob } from "@/domain/entities/Jobs";

import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const editJobController = (dependencies: IDependencies) => {
  const {
    useCases: { editJobUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.jobId) {
        throw new Error("jobId not provided");
      }


      const data:IEditJob={
        jobId:String(req.params.jobId),
        userId:String(req.user._id),
        description:String(req.body.description),
        email:String(req.body.email),
        jobTitle:String(req.body.jobTitle),
        location:String(req.body.location),
        mode:String(req.body.mode),
        skills:req.body.skills,
        type:String(req.body.type),
      }

      const updatedJobPost = await editJobUseCase(dependencies).execute(data);

      if (!updatedJobPost) {
        throw new Error("post updating failed");
      }

      res.status(200).json({
        success: true,
        data: updatedJobPost,
        message: "Job Updated",
      });
    } catch (error) {
      next(error);
    }
  };
};

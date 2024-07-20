import { IDependencies } from "@/application/interfaces/IDependencies";
import { ICreateJob } from "@/domain/entities/Jobs";

import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

export const createJobController = (dependencies: IDependencies) => {
  const {
    useCases: { createJobUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.body.companyId) {
        throw new Error("companyId not provided");
      }
      if (!req.body.description) {
        throw new Error("description not provided");
      }
      if (!req.body.jobTitle) {
        throw new Error("job Title not provided");
      }
      const data: ICreateJob = {
        companyId: String(req.body.companyId),
        description: req.body.description,
        jobTitle: req.body.jobTitle,
      };
      
      if (req.user.type === "recruiter") {
        data.recruiterId = String(req.user._id);
      }
      
      if (req.body.email) {
        data.email = req.body.email;
      }
      
      if (req.body.location) {
        data.location = req.body.location;
      }
      
      if (req.body.mode) {
        data.mode = req.body.mode;
      }
      
      if (req.body.skills) {
        data.skills = req.body.skills;
      }
      
      if (req.body.type) {
        data.type = req.body.type;
      }
      const createdJobPost = await createJobUseCase(dependencies).execute(data);

      if (!createdJobPost) {
        throw new Error("post creatin failed");
      }

      res.status(200).json({
        success: true,
        data: createdJobPost,
        message: "Job Created",
      });
    } catch (error) {
      next(error);
    }
  };
};

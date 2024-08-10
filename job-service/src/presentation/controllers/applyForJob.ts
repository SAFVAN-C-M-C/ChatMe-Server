import { IDependencies } from "@/application/interfaces/IDependencies";
import { ApplicationParams } from "@/domain/entities";
import { ICreateJob } from "@/domain/entities/Jobs";
import { Request, Response, NextFunction } from "express";

export const applyForJobController = (dependencies: IDependencies) => {
  const {
    useCases: { applyForJobUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required: No user provided.",
        });
      }
      const { coverLetter, email, jobId, name, phone, resume } = req.body;
      if (!coverLetter || !email || !jobId || !name || !phone || !resume) {
        return res.status(400).json({
          success: false,
          message: "Required fields are missing.",
          errors: {
            coverLetter: !coverLetter ? "Cover letter is required." : undefined,
            email: !email ? "Email is required." : undefined,
            jobId: !jobId ? "Job ID is required." : undefined,
            name: !name ? "Name is required." : undefined,
            phone: !phone ? "Phone number is required." : undefined,
            resume: !resume ? "Resume is required." : undefined,
          },
        });
      }

      const jobApplicationData = {
        coverLetter,
        email,
        jobId,
        name,
        phone,
        resume,
        userId: user._id,
      };
      const createdJobApplication = await applyForJobUseCase(
        dependencies
      ).execute(jobApplicationData);

      if (!createdJobApplication) {
        return res.status(500).json({
          success: false,
          message: "Job application creation failed.",
        });
      }

      res.status(201).json({
        success: true,
        data: createdJobApplication,
        message: "Job application submitted successfully.",
      });
    } catch (error) {
      next(error);
    }
  };
};

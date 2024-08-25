import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addPreferedJobsController = (dependencies: IDependencies) => {
  const {
    useCases: { addPreferedJobsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      let { preferedJobs } = req.body;
      const arrayPreferedJobs: string[] = Array.from(preferedJobs.split(","));

      const data = {
        email: req.user.email,
        preferedJobs: arrayPreferedJobs,
      };
      const result = await addPreferedJobsUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Prefered Jobs added",
      });
    } catch (error) {
      next(error);
    }
  };
};

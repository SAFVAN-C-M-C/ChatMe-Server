import { IDependencies } from "@/application/interfaces/IDependencies";
import { Experience } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const addExperienceController = (dependencies: IDependencies) => {
  const {
    useCases: { addExperienceUsecase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const data: Experience = {
        email: req.user.email,
        experience: req.body,
      };
      const result = await addExperienceUsecase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Experience added",
      });
    } catch (error) {
      next(error);
    }
  };
};

import { IDependencies } from "@/application/interfaces/IDependencies";
import { AddResume, Education, Experience } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const addResumeToProfileController = (dependencies: IDependencies) => {
  const {
    useCases: { addResumeToProfileUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { name, doc } = req.body;
      const data: AddResume = {
        userId: String(req.user._id),
        name,
        doc,
      };
      const result = await addResumeToProfileUseCase(dependencies).execute(
        data
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Resume added",
      });
    } catch (error) {
      next(error);
    }
  };
};

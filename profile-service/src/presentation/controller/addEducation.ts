import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const addEducationController = (dependencies: IDependencies) => {
  const {
    useCases: { addEducationUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const data: Education = {
        email: req.user.email,
        education: req.body,
      };
      const result = await addEducationUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Education added",
      });
    } catch (error) {
      next(error);
    }
  };
};

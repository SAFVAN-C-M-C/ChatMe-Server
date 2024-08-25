import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addSkillsController = (dependencies: IDependencies) => {
  const {
    useCases: { addSkillsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      let { skills } = req.body;
      const arraySkills: string[] = Array.from(skills.split(","));

      const data = {
        email: req.user.email,
        skills: arraySkills,
      };
      const result = await addSkillsUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Skills added",
      });
    } catch (error) {
      next(error);
    }
  };
};

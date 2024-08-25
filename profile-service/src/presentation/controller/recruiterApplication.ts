import { IDependencies } from "@/application/interfaces/IDependencies";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";
import { NextFunction, Request, Response } from "express";

export const applyRecruiterController = (dependencies: IDependencies) => {
  const {
    useCases: { recruiterApplicationUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { companyEmail, content, name, email } = req.body;
      const dataFromClient: RecruiterApplication = {
        companyEmail,
        content,
        name,
        userEmail: email,
        userId: req.user._id,
      };

      const result = await recruiterApplicationUseCase(dependencies).execute(
        dataFromClient
      );


      if (!result) {
        throw new Error("something wrong");
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "Request Sended",
      });
    } catch (error) {
      console.error(error);

      next(error);
    }
  };
};

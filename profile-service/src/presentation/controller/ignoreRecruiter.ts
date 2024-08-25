import { IDependencies } from "@/application/interfaces/IDependencies";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";
import { Request, Response, NextFunction } from "express";

export const ignoreRecruiterController = (dependencies: IDependencies) => {
  const {
    useCases: { ignoreRecruiterUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const data: AcceptRequest = {
        email: req.user.email,
        requestId: req.body.requestId,
        userEmail: req.body.userEmail,
      };
      const result = await ignoreRecruiterUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Recruiter request deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

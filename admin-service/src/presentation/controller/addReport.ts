import { IDependencies } from "@/application/interfaces/IDependencies";
import { ReportDetails } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const addReportController = (dependencies: IDependencies) => {
  const {
    useCases: { addReportUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const data: ReportDetails = {
        postId: String(req.body.postId),
        reason: String(req.body.reason),
        suspectId: String(req.body.suspectId),
        userId: String(req.user._id),
      };
      const result = await addReportUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("Somthing went wrong");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Request added",
      });
    } catch (error) {
      next(error);
    }
  };
};

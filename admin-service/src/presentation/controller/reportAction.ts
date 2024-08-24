import { IDependencies } from "@/application/interfaces/IDependencies";
import { updateVerificationStatus } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const reportActionController = (dependencies: IDependencies) => {
  const {
    useCases: { reportActionUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const data = {
        userId: req.body.userId,
        reportId: req.body.reportId,
      };

      const result = await reportActionUseCase(dependencies).execute(data);

      res.status(200).json({
        success: true,
        data: result,
        message: "Report action took",
      });
    } catch (error) {
      next(error);
    }
  };
};

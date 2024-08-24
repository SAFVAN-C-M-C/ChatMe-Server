import { IDependencies } from "@/application/interfaces/IDependencies";
import { updateVerificationStatus } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const deleteReportController = (dependencies: IDependencies) => {
  const {
    useCases: { deleteReportUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const id = String(req.params.id);
      const result = await deleteReportUseCase(dependencies).execute(
        String(id)
      );

      res.status(200).json({
        success: true,
        data: result,
        message: "Report deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

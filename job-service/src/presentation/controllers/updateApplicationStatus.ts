import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateApplicationStatusController = (dependencies: IDependencies) => {
  const {
    useCases: { updateApplicationStatusUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      
      const { applicationId } = req.params;
      const { status,jobId } = req.body;
      if (typeof status !== 'string') {
        throw new Error("Invalid status");
      }
      if (typeof jobId !== 'string') {
        throw new Error("Invalid jobId");
      }
      const data={
        jobId,
        status,
        applicationId,
        userId:String(req.user._id)
      }
      const result = await updateApplicationStatusUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("No data found");
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "Application status updated successfully",
      });
    } catch (error) {
      next(error);
    }
  };
};

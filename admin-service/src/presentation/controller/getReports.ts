import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getReportsController = (dependencies: IDependencies) => {
  const {
    useCases: { getReportsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const result = await getReportsUseCase(dependencies).execute();

      if (!result) {
        throw new Error("No reports found");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Companies Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

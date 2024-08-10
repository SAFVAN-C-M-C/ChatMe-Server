import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getMyJobApplicationsController = (dependencies: IDependencies) => {
  const {
    useCases: { getMyJobApplicationsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { status } = req.query;
      if (typeof status !== 'string') {
        throw new Error("Invalid status");
      }
      const data={
        status,
        userId:String(req.user._id)
      }
      const result = await getMyJobApplicationsUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("No data found");
      }
      res.status(200).json({
        success: true,
        data: result,
        message: "My applications Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

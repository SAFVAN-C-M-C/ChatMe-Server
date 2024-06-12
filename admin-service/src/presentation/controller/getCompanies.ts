import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getCompaniesController = (dependencies: IDependencies) => {
  const {
    useCases: { getCompaniesUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const result = await getCompaniesUseCase(dependencies).execute();

      if (!result) {
        console.log("no users");
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

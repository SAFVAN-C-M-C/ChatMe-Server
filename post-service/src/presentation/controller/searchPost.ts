import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const searchPostController = (dependencies: IDependencies) => {
  const {
    useCases: { searchPostUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { key } = req.query;
      const result = await searchPostUseCase(dependencies).execute({
        searchKey: String(key),
      });

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Search posts Fetched",
        key: String(key),
      });
    } catch (error) {
      next(error);
    }
  };
};

import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getSearchedUserController = (dependencies: IDependencies) => {
  const {
    useCases: { getSearchedUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const result = await getSearchedUserUseCase(dependencies).execute({
        searchKey: String(req.query.key),
      });

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Search Users Profile Fetched",
        key: String(req.query.key),
      });
    } catch (error) {
      next(error);
    }
  };
};

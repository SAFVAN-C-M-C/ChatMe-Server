import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependencies: IDependencies) => {
  const {
    useCases: { getUsersUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      console.log("requested user",req.user);
      const result = await getUsersUseCase(dependencies).execute();

      if (!result) {
        console.log("no users");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "User Profile Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

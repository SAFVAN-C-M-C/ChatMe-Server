
import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const getSystemNotificationsController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { getSystemNotificationsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("User not found");
      }

      const result = await getSystemNotificationsUseCase(dependencies).execute();

      if (!result) {
        throw new Error("Something went wrong");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Notification fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

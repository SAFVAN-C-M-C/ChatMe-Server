
import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const getNotificationsController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { getNotificationsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Email is required!");
      }

      const result = await getNotificationsUseCase(dependencies).execute(String(req.user._id));

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

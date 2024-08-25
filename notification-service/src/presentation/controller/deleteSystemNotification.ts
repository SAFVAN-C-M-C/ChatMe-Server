import { IDependencies } from "@/application/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const deleteSystemNotificationController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { deleteSystemNotificationUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("user not found!");
      }
      if (!req.params.notificationId) {
        throw new Error("notificationId not found!");
      }
      const result = await deleteSystemNotificationUseCase(
        dependencies
      ).execute(String(req.params.notificationId));

      if (!result) {
        throw new Error("Something went wrong");
      }

      res.status(204).json({
        success: true,
        data: result,
        message: "Notification deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

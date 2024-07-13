
import { IDependencies } from "@/application/interfaces/IDependencies";
import { io } from "@/infrastructure/socket";

import { Request, Response, NextFunction } from "express";

export const createNewNotificationController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { createNewNotificationUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Email is required!");
      }
      if (req.user.role !== "admin") {
        throw new Error("Unautherized");
      }
      let { content } = req.body;

      const result = await createNewNotificationUseCase(dependencies).execute({
        content,
      });

      if (!result) {
        throw new Error("Something went wrong");
      }
      io.emit("newAdminNotification",result)
      res.status(200).json({
        success: true,
        data: result,
        message: "Notification sended",
      });
    } catch (error) {
      next(error);
    }
  };
};

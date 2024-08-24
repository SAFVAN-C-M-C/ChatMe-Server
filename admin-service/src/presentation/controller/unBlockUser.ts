import { IDependencies } from "@/application/interfaces/IDependencies";
import {
  updateBlockStatus,
  updateVerificationStatus,
} from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const unBlockUserController = (dependencies: IDependencies) => {
  const {
    useCases: { unBlockUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const data = {
        userId: req.body.userId,
        isBlocked: req.body.isBlocked,
        type: req.body.type,
      };

      const result = await unBlockUserUseCase(dependencies).execute(data);
      const updatedData = {
        userId: data.userId,
        isBlocked: data.isBlocked,
      };
      await updateBlockStatus(updatedData, "auth-service-topic");
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

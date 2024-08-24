import { IDependencies } from "@/application/interfaces/IDependencies";
import { updateVerificationStatus } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const verifyRequestController = (dependencies: IDependencies) => {
  const {
    useCases: { verifyRequestUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const data = {
        email: req.body.email,
        isVerified: req.body.isVerified,
        type: req.body.type,
      };
      const result = await verifyRequestUseCase(dependencies).execute(data);

      const updatedData = {
        email: data.email,
        isVerified: data.isVerified,
      };
      await updateVerificationStatus(updatedData, "profile-service-topic");
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

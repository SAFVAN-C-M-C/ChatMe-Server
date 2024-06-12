import { IDependencies } from "@/application/interfaces/IDependencies";
import { updateBlockStatus, updateVerificationStatus } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const unBlockUserController = (dependencies: IDependencies) => {
  const {
    useCases: { unBlockUserUseCase  },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const data={
        email:req.body.email,
        isBlocked:req.body.isBlocked,
        type:req.body.type
      }
      console.log(data);
      
      const result = await unBlockUserUseCase(dependencies).execute(data);

      if (!result) {
        console.log("no users");
      }
      const updatedData={
        email:data.email,
        isBlocked:data.isBlocked
      }
      await updateBlockStatus(updatedData,"auth-service-topic")
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

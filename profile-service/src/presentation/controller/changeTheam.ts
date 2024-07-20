import { IDependencies } from "@/application/interfaces/IDependencies";
import { createFollowNotification } from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const changeTheamController = (dependencies: IDependencies) => {
  const {
    useCases: { changeTheamUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const theam=req.body.theam
      console.log(theam,"theam");
      const result = await changeTheamUseCase(dependencies).execute(
        {
            id:String(req.user._id),
            theam:String(theam),
        });

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Theam changed",
      });
    } catch (error) {
      next(error);
    }
  };
};

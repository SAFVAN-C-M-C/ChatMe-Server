import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const followUserController = (dependencies: IDependencies) => {
  const {
    useCases: { followUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const userId=req.params.userId
      console.log(userId,"userid");
      
      const result = await followUserUseCase(dependencies).execute(
        {
            myId:String(req.user._id),
            userId:String(userId),
        });

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Follower added",
      });
    } catch (error) {
      next(error);
    }
  };
};

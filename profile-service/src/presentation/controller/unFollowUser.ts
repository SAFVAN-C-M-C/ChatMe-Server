import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const unFollowUserController = (dependencies: IDependencies) => {
  const {
    useCases: { unfollowUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const { userId } = req.params;

      const result = await unfollowUserUseCase(dependencies).execute({
        myId: String(req.user._id),
        userId: String(userId),
      });

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Follower removed",
      });
    } catch (error) {
      next(error);
    }
  };
};

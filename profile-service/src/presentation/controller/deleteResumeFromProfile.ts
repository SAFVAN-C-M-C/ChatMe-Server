import { IDependencies } from "@/application/interfaces/IDependencies";
import { DeleteResume } from "@/domain/entities";
import { Request, Response, NextFunction } from "express";

export const deleteResumeFromProfileController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { deleteResumeFromProfileUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { id } = req.params;
      const data: DeleteResume = {
        userId: String(req.user._id),
        id,
      };
      const result = await deleteResumeFromProfileUseCase(dependencies).execute(
        data
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Resume deleted",
      });
    } catch (error) {
      next(error);
    }
  };
};

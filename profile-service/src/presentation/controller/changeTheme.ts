import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const changeTheamController = (dependencies: IDependencies) => {
  const {
    useCases: { changeThemeUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const theme = req.query.theme;

      const result = await changeThemeUseCase(dependencies).execute({
        id: String(req.user._id),
        theme: String(theme),
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

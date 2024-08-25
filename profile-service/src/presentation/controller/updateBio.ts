import { IDependencies } from "@/application/interfaces/IDependencies";
import { BioDetails } from "@/domain/entities/BioDetails";
import { Request, Response, NextFunction } from "express";

export const updateBioController = (dependencies: IDependencies) => {
  const {
    useCases: { updateBioUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const { email } = req.user;
      const { name, title, bio } = req.body;
      const { location, doc, resume, phone } = bio;
      const data: BioDetails = {
        name,
        email,
        title,
        bio: {
          location,
          phone,
          resume,
          doc,
        },
      };
      const result = await updateBioUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Bio updated",
      });
    } catch (error) {
      next(error);
    }
  };
};

import cloudinary from "@/_boot/cloudinaryConfig";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { BioDetails } from "@/domain/entities/BioDetails";
import { Request, Response, NextFunction } from "express";

export const updateAboutController = (dependencies: IDependencies) => {
  const {
    useCases: { updateAboutUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      console.log("data",req.body.about);
      
      const data={
        about:req.body.about,
        email:req.user?.email,
      }
      const result = await updateAboutUseCase(dependencies).execute(
        data
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "About updated",
      });
    } catch (error) {
      next(error);
    }
  };
};

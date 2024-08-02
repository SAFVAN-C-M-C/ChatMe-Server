import cloudinary from "@/_boot/cloudinaryConfig";
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
      const data:BioDetails={
        name:req.body.name,
        email:req.user?.email,
        title:req.body.title,
        bio:{
            location:req.body.bio.location,
            phone:req.body.bio.phone,
            resume:req.body.bio.resume,
            doc:req.body.bio.doc
        }
      }
      const result = await updateBioUseCase(dependencies).execute(
        data
      );

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

import cloudinary from "@/_boot/cloudinaryConfig";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateAvatarController = (dependencies: IDependencies) => {
  const {
    useCases: { updateAvatarUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if(!req.file){
        throw new Error("image not found");
      }
      console.log("file here",req.file.originalname);
      
      const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: 'profile_pics',
        use_filename: true,
    });
      if(!uploadedImage){
        throw new Error("Something went wrong in upload");
      }
      const data={
        email:req.user.email,
        avatar:uploadedImage.secure_url
      }
      const result = await updateAvatarUseCase(dependencies).execute(
        data
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Avatar updated",
      });
    } catch (error) {
      next(error);
    }
  };
};

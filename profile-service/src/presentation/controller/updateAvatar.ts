import cloudinary from "@/_boot/cloudinaryConfig";
import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const updateAvatarController = (dependencies: IDependencies) => {
  const {
    useCases: { updateAvatarUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
    
     
      console.log("Body received:", req.body);


      const data = {
        email: req.user.email,
        avatar: req.body.avatar
      };

      const result = await updateAvatarUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }
      console.log(data.avatar);
      
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

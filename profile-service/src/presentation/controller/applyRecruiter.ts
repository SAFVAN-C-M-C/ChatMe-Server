import { IDependencies } from "@/application/interfaces/IDependencies";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";
import { NextFunction, Request, Response } from "express";

export const applyRecruiterController = (dependencies: IDependencies) => {
  const {
    useCases: {applyRecruiterUseCase, findUserByEmailUseCase},
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      const dataFromClient:RecruiterApplication={
        companyEmail:req.body.companyEmail,
        content:req.body.content,
        name:req.body.name,
        userEmail:req.user.email,
        userId:req.user._id
      }
      
      const existingUser=await findUserByEmailUseCase(dependencies).execute(String(dataFromClient.companyEmail))
      

      const result = await applyRecruiterUseCase(dependencies).execute(
        dataFromClient
      );

      if (!result) {
        throw new Error("User not found!");
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "User Profile Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};

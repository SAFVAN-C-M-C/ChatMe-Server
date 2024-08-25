import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education } from "@/domain/entities";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";
import {
  recruiterRequest,
  updateAccountType,
} from "@/infrastructure/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const acceptRecruiterController = (dependencies: IDependencies) => {
  const {
    useCases: { acceptRecruiterUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      const data: AcceptRequest = {
        email: req.user.email,
        requestId: req.body.requestId,
        userEmail: req.body.userEmail,
        userId: req.body.userId,
      };
      const result = await acceptRecruiterUseCase(dependencies).execute(data);

      if (!result) {
        throw new Error("User not found!");
      }
      const dataToAdmin = {
        email: data.userEmail,
        name: result.companyDetails?.recruiters?.find(
          (recruiter) => recruiter.email === data.userEmail
        )?.name,
        companyId: result._id,
        companyName: result.name,
      };
      const dataForChangeAccountType = {
        userId: String(data.userId),
        accountType: "recruiter",
      };
      await updateAccountType(dataForChangeAccountType, "auth-service-topic");
      await recruiterRequest(dataToAdmin, "admin-service-topic");
      res.status(200).json({
        success: true,
        data: result,
        message: "Recruiter accepted",
      });
    } catch (error) {
      next(error);
    }
  };
};

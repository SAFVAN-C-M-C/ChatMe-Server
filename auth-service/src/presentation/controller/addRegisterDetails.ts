import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { registerDetailsValidation } from "@/_lib/validation";
import { hashPassword } from "@/_lib/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/jwt";
import { ErrorResponse } from "@/_lib/common/error";
import { LoginCredential } from "@/domain/entities";
import { findUserByEmailUseCase } from "@/application/useCases";

import { RegisterDetails } from "@/domain/entities/RegisterDetails";
import { addUser, addUserDetails } from "@/infrastructure/kafka/producer";

export const addRegisterDetailsController = (dependencies: IDependencies) => {
  const {
    useCases: { addRegisterDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const registerCredentials: any = req.body;

    if (registerCredentials) {
      try {
        let token = req.user;
        let data: RegisterDetails = {
          email: token?.email,
          name: registerCredentials?.data?.name,
          accountType: registerCredentials?.data?.accountType,
          location: registerCredentials?.data?.location,
          phone: registerCredentials?.data?.phone,
        };

        const userData = await addRegisterDetailsUseCase(dependencies).execute(
          data
        );

        if (!userData) {
          return res.json({
            success: false,
            message: "Something Went wrong try again in create user",
          });
        }

        const userDataToProfile: any = {
          userId: userData._id,
          email: userData.email,
          name: userData.name,
          location: userData.location,
          phone: userData.phone,
          accountType: userData.accountType,
        };

        const userToAdmin: any = {
          userId: userData._id,
          email: userData.email,
          name: userData.name,
          accountType: userData.accountType,
        };
        if (userData.accountType === "company") {
          userDataToProfile.doc = registerCredentials?.data?.doc;
          userToAdmin.doc = registerCredentials?.data?.doc;
        }

        await addUser(userToAdmin, "admin-service-topic");
        await addUserDetails(userDataToProfile, "profile-service-topic");

        const accessToken = generateAccessToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: true,
          isDetailsComplete: userData?.isDetailsComplete,
          isEmailVerified: userData?.isEmailVerified,
        });

        const refreshToken = generateRefreshToken({
          _id: String(userData?._id),
          email: userData?.email!,
          role: userData?.role!,
          type: userData?.accountType!,
          loggined: true,
          isDetailsComplete: userData?.isDetailsComplete,
          isEmailVerified: userData?.isEmailVerified,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
          maxAge: 6000 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'none' // Allow cookies to be sent cross-origin
        });
        
        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
          maxAge: 6000 * 60 * 24 * 15,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'none' // Allow cookies to be sent cross-origin
        });

        delete userData?.password;
        res.status(200).json({
          success: true,
          data: userData,
          message: "User created!",
          loggined: true,
          detailsFilled: userData?.isDetailsComplete,
        });
      } catch (error: any) {
        console.error(error, "<<Something went wrong in user signup>>");
      }
    }
  };
};

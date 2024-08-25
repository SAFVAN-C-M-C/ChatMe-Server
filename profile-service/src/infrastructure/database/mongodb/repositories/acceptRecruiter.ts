import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";
import { IUserProfile } from "@/domain/entities";

export const acceptRecruiter = async (data: AcceptRequest) => {
  try {
    let { email, requestId, userEmail, userId } = data;
    if (!data.email) {
      throw new Error("email not provided");
    }

    const companyProfile = await UserProfile.findOne({ email: email });

    if (!companyProfile || companyProfile.accountType !== "company") {
      throw new Error("Company Not found");
    }
    if (
      !companyProfile.recruiterApplication?.find(
        (applicant) => applicant.userEmail === userEmail
      )
    ) {
      throw new Error("Request Not found");
    }
    const filter = userId
      ? { userId: new Types.ObjectId(String(data.userId)) }
      : { email: userEmail };
    const userProfile = await UserProfile.findOne(filter);
    if (!userProfile) {
      throw new Error("user Not found");
    }
    if (userProfile?.accountType) userProfile.accountType = "recruiter";
    if (userProfile?.companyDetails)
      userProfile.companyDetails.companyId = companyProfile.userId;
    if (userProfile?.companyDetails)
      userProfile.companyDetails.companyName = companyProfile.name;
    userProfile.save();

    const newRecruiter = {
      userId: userProfile.userId,
      email: userProfile.email,
      name: userProfile.name,
      avatar: userProfile.bio.avatar || "",
    };
    companyProfile.companyDetails?.recruiters?.push(newRecruiter);
    companyProfile.save();
    const updatedUserProfile = await UserProfile.findOneAndUpdate(
      {
        email: email,
      },
      {
        $pull: {
          recruiterApplication: {
            $or: [
              { _id: new Types.ObjectId(String(requestId)) },
              { userEmail: userEmail },
            ],
          },
        },
      },
      {
        new: true,
      }
    );
    if (!updatedUserProfile) {
      throw new Error("User not found");
    }

    return updatedUserProfile as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

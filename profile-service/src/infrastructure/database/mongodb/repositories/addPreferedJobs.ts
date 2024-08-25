import { Education, Experience, IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const addPreferedJobs = async (data: {
  email?: string;
  preferedJobs?: string[];
}) => {
  try {
    let { email, preferedJobs } = data;
    if (!data.email) {
      throw new Error("email not provided");
    }

    const userProfileData = await UserProfile.findOneAndUpdate(
      { email: email },
      { $set: { preferedJobs: preferedJobs } },
      { new: true }
    );
    if (!userProfileData) {
      throw new Error("User not found");
    }

    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

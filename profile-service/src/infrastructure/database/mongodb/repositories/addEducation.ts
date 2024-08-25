import { Education, IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const addEducation = async (data: Education) => {
  try {
    let { email, education } = data;
    if (!data.email) {
      throw new Error("email not provided");
    }

    const userProfileData = await UserProfile.findOneAndUpdate(
      { email: email },
      { $push: { education: education } },
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

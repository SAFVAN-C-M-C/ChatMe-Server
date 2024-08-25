import { IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";

export const updateAbout = async (data: { email: string; about: string }) => {
  try {
    const { about, email } = data;
    if (!email) {
      throw new Error("Email not provided");
    }
    const userProfileData = await UserProfile.findOne({ email: email });
    if (!userProfileData) {
      throw new Error("User not found");
    }
    if (about) userProfileData.bio.about = about;
    userProfileData.save();
    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

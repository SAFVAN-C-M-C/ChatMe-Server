import { IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";

export const updateAvatar = async (data: { avatar: string; email: string }) => {
  try {
    const { avatar, email } = data;
    if (!email) {
      throw new Error("Email not provided");
    }
    const userProfileData = await UserProfile.findOne({ email: email });
    if (!userProfileData) {
      throw new Error("User not found");
    }
    userProfileData.bio.avatar = avatar;
    userProfileData.save();
    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

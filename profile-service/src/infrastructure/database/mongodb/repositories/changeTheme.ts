import { Education, Experience, IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const changeTheme = async (data: { id: string; theme: string }) => {
  try {
    let { id, theme } = data;
    if (!id || !theme) {
      throw new Error("id and theam not provided");
    }

    const userProfileData = await UserProfile.findOneAndUpdate(
      { userId: new Types.ObjectId(id) },
      { $set: { theme: theme } },
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

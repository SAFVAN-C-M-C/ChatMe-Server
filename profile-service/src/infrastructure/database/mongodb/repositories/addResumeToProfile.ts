import {
  AddResume,
  Education,
  Experience,
  IUserProfile,
} from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const addResumeToProfile = async (data: AddResume) => {
  try {
    let { userId, doc, name } = data;
    if (!userId) {
      throw new Error("userId not provided");
    }

    const userProfileData = await UserProfile.findOneAndUpdate(
      { userId: new Types.ObjectId(userId) },
      {
        $push: {
          "bio.resume": { name, doc },
        },
      },
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

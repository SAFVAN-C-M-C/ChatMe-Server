import { Education } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const addEducation = async (data: Education) => {
  try {
    let { userId, education } = data;
    if (!data.userId) {
      throw new Error("userId not provided");
    }

    const filter = { userId: new Types.ObjectId(String(userId)) };

    const userProfileData = await UserProfile.findByIdAndUpdate(
      filter,
      { $push: { education: education } },
      { new: true }
    );
    if (!userProfileData) {
      throw new Error("User not found");
    }
    console.log("updatedData",userProfileData);
    
    return userProfileData;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

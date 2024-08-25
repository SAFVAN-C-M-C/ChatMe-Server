import { Education, IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const editEducation = async (data: Education) => {
  try {
    let { userId, education } = data;
    if (!data.userId) {
      throw new Error("userId not provided");
    }
    if (!education._id) {
      throw new Error("specific education not provided");
    }
    const filter = {
      userId: new Types.ObjectId(String(userId)),
      educationId: new Types.ObjectId(String(education._id)),
    };

    const userProfileData = await UserProfile.findByIdAndUpdate(
      { userId: filter.userId, "education._id": filter.educationId },
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

import mongoose, { Types } from "mongoose";
import { UserProfile } from "../model/UserProfile";
import { UserDetails } from "@/infrastructure/services/addUserDetailService";
import { DeleteResume, IUserProfile } from "@/domain/entities";

export const deleteResumeFromProfile = async (
  data: DeleteResume
): Promise<IUserProfile | null | undefined> => {
  try {
    const { id, userId } = data;
    if (!id || !userId) throw new Error("Details not provided");
    const result = await UserProfile.findOneAndUpdate(
      { userId: new Types.ObjectId(userId) },
      {
        $pull: {
          "bio.resume": { _id: new Types.ObjectId(id) },
        },
      },
      { new: true }
    );
    if (!result) {
      throw new Error("User not found");
    }
    return result as IUserProfile;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

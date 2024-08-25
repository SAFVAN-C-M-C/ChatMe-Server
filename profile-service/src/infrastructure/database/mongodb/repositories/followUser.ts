import { Types } from "mongoose";
import { UserProfile } from "../model";
import { IUserProfile } from "@/domain/entities";

export const followUser = async (data: { myId: string; userId: string }) => {
  try {
    const { userId, myId } = data;

    if (!userId || !myId) {
      throw new Error("user not found");
    }

    const userObjectId = new Types.ObjectId(userId);
    const myObjectId = new Types.ObjectId(myId);

    // Add ourUserId to the followers list of targetUserId
    const first = await UserProfile.updateOne(
      { userId: userObjectId },
      { $addToSet: { followers: myObjectId } }
    );

    // Add targetUserId to the following list of ourUserId
    const second = await UserProfile.updateOne(
      { userId: myObjectId },
      { $addToSet: { following: userObjectId } }
    );

    const editedPost = await UserProfile.findOne({ userId: myObjectId });

    return editedPost as IUserProfile;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

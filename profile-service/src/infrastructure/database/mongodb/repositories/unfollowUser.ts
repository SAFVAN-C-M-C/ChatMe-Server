import { Types } from "mongoose";
import { UserProfile } from "../model";
import { IUserProfile } from "@/domain/entities";

export const unfollowUser = async (data: { myId: string; userId: string }) => {
  try {
    const { userId, myId } = data;

    if (!userId || !myId) {
      throw new Error("user not found");
    }

    const userObjectId = new Types.ObjectId(userId);
    const myObjectId = new Types.ObjectId(myId);

    // Remove ourUserId from the followers list of targetUserId
    await UserProfile.updateOne(
      { userId: userObjectId },
      { $pull: { followers: myObjectId } }
    );

    // Remove targetUserId from the following list of ourUserId
    await UserProfile.updateOne(
      { userId: myObjectId },
      { $pull: { following: userObjectId } }
    );
    const editedPost = await UserProfile.findOne({ userId: myObjectId });

    return editedPost as IUserProfile;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

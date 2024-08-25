import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IUserProfile, UserShocaseDeatials } from "@/domain/entities";
import { Types } from "mongoose";

export const getUserDetailsByUserId = async (
  id: string
): Promise<UserShocaseDeatials | null> => {
  try {
    const existingUser = await UserProfile.findOne({
      userId: new Types.ObjectId(String(id)),
    });
    if (!existingUser) {
      throw new Error("User does not exist!");
    }

    const data: UserShocaseDeatials = {
      _id: existingUser._id,
      userId: existingUser.userId,
      accountType: String(existingUser.accountType),
      avatar: String(existingUser.bio.avatar),
      isVerified: existingUser.isVerified,
      name: String(existingUser.name),
      email: String(existingUser.email),
      location: String(existingUser.bio.location),
    };
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

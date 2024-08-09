import { IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const getUserSuggestions = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId not provided");
    }
    const limit = 5;
    const randomProfiles = await UserProfile.aggregate([
      { $match: { userId: { $ne: new Types.ObjectId(userId) } } },
      // Add a random value to each document
      { $addFields: { randomValue: { $rand: {} } } },

      { $sort: { randomValue: 1 } },

      { $limit: limit },

      {
        $project: {
          name: 1,
          bio: 1,
          accountType: 1,
          isVerified: 1,
          followers: 1,
          following: 1,
          userId: 1,
        },
      },
    ]);

    return randomProfiles;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IUserProfile } from "@/domain/entities";
import { Types } from "mongoose";

export const findByEmail = async (
  email?: string
): Promise<IUserProfile | null> => {
  try {
    const existingUser = await UserProfile.findOne({ email: email });

    if (!existingUser) {
      throw new Error("User does not exist!");
    }

    return existingUser as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

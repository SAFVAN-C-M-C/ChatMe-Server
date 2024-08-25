import mongoose, { Types } from "mongoose";
import { UserProfile } from "../model/UserProfile";
import { IUserProfile } from "@/domain/entities";

export const createUser = async (data: {
  email: string;
  userId?: Types.ObjectId | string;
}) => {
  try {
    // Convert userId to ObjectId if it's a string
    if (typeof data.userId === "string") {
      data.userId = new Types.ObjectId(data.userId);
    }

    const newUser = await UserProfile.create({
      email: data.email,
      userId: data.userId,
    });

    return newUser as IUserProfile;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

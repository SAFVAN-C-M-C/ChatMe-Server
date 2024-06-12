import mongoose, { Types } from "mongoose";
import { UserProfile } from "../model/UserProfile";

export const updateVerification = async (data: {
  email: string;
  isVerified: boolean;
}) => {
  try {
    console.log("Data to be inserted:", data);

    const newUser = await UserProfile.findOneAndUpdate(
      { email: data.email },
      { $set: { isVerified: data.isVerified } },
      { new: true }
    );
    console.log("New user profile:", newUser);
    return newUser;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

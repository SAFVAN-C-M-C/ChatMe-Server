import mongoose, { Types } from "mongoose";
import { User } from "../models";

export const updateBlockStatus = async (data: {
  userId: string;
  isBlocked: boolean;
}) => {
  try {
    console.log("Data to be inserted:", data);

    const newUser = await User.findOneAndUpdate(
      { _id: new Types.ObjectId(String(data.userId)) },
      { $set: { isBlocked: data.isBlocked } },
      { new: true }
    );
    console.log("New user profile:", newUser);
    return newUser;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

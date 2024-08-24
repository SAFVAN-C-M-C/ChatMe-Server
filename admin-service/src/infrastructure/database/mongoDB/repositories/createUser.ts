import { Types } from "mongoose";
import { Users } from "../model/Users";
interface IData {
  name: string;
  email: string;
  userId?: string | Types.ObjectId;
}
export const createUser = async (data: IData) => {
  try {
    // Convert userId to ObjectId if it's a string
    if (typeof data.userId === "string") {
      data.userId = new Types.ObjectId(data.userId);
    }

    const newUser = await Users.create({
      email: data.email,
      userId: data.userId,
      name: data.name,
    });

    return newUser;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

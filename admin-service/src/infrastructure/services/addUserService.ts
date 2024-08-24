import { ObjectId } from "mongoose"; // Ensure this is imported correctly from mongoose
import { IUsers } from "@/domain/entities";
import { createUser } from "@/infrastructure/database/mongoDB/repositories/createUser";

interface IData {
  name: string;
  email: string;
  userId?: string;
}

export const addUserService = async (data: IData) => {
  try {
    const userData = await createUser(data);
  } catch (error) {
    console.error(error);
  }
};

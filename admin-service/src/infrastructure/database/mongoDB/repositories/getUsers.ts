import { Users } from "@/infrastructure/database/mongoDB/model";
import { IUsers } from "@/domain/entities";

export const getUsers = async (): Promise<IUsers[] | null> => {
  try {
    const users = await Users.find();
    console.log(users);
    
    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

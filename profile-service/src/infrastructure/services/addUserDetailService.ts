
import { Types } from "mongoose";
import { addUserDetails } from "../database/mongodb/repositories/addUserDetails";
import { IUserProfile } from "@/domain/entities";
export interface UserDetails {
  userId?: Types.ObjectId|string;
  email: string;
  name: string;
  location: string;
  phone: string;
  accountType: string;
}
export const addUserDetailService = async (data: IUserProfile) => {
  try {
    const userData = await addUserDetails(data);
    console.log(userData, "===========");
  } catch (error) {
    console.log(error);
  }
};

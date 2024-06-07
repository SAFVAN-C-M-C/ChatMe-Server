import mongoose, { ObjectId, Types } from "mongoose";
import { Company } from "../model";
interface IData {
    name: string;
    email: string;
    userId?: string |Types.ObjectId;
  }
export const createCompany = async (data:IData ) => {
    try {
        // Convert userId to ObjectId if it's a string
        if (typeof data.userId === 'string') {
            data.userId = new Types.ObjectId(data.userId);
        }

        console.log("Data to be inserted:", data);

        const newUser = await Company.create({email:data.email,userId:data.userId,name:data.name});
        console.log("New user:", newUser);
        return newUser;
    } catch (error: any) {
        console.error("Error during user profile insertion:", error);
    }
};
import mongoose, { ObjectId, Types } from "mongoose";
import { Company } from "../model";
import { RecruiterReqest } from "../model/RecruiterRequests";
interface IData {
    email?: string;
    name?: string;
    companyId?: ObjectId |string;
    companyName?: string;
  }
export const addrecruiterRequest = async (data:IData ) => {
    try {
       

        console.log("Data to be inserted:", data);

        const newrRequest = await RecruiterReqest.create(data);
        console.log("New request:", newrRequest);
        return newrRequest;
    } catch (error: any) {
        console.error("Error during user profile insertion:", error);
    }
};
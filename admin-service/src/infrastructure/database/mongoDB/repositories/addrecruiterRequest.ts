import { ObjectId } from "mongoose";

import { RecruiterReqest } from "../model/RecruiterRequests";
interface IData {
  email?: string;
  name?: string;
  companyId?: ObjectId | string;
  companyName?: string;
}
export const addrecruiterRequest = async (data: IData) => {
  try {
    const newrRequest = await RecruiterReqest.create(data);

    return newrRequest;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

import { addrecruiterRequest } from "../database/mongoDB/repositories/addrecruiterRequest";
import { createCompany } from "../database/mongoDB/repositories/createCompany";
import mongoose, { ObjectId, Types } from "mongoose";
interface IData {
  email?: string;
  name?: string;
  companyId?: ObjectId | string;
  companyName?: string;
}

export const addrecruiterRequestService = async (data: IData) => {
  try {
    const userData = await addrecruiterRequest(data);
  } catch (error) {
    console.error(error);
  }
};

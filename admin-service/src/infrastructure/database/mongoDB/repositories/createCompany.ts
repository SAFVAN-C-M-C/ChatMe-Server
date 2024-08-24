import { Types } from "mongoose";
import { Company } from "../model";
import { CompanyReqest } from "../model/ComapanyRequest";
interface IData {
  name: string;
  email: string;
  userId?: string | Types.ObjectId;
  doc?: string;
}
export const createCompany = async (data: IData) => {
  try {
    // Convert userId to ObjectId if it's a string
    if (typeof data.userId === "string") {
      data.userId = new Types.ObjectId(data.userId);
    }

    const newUser = await Company.create({
      email: data.email,
      userId: data.userId,
      name: data.name,
      doc: data.doc,
    });
    const newRequest = await CompanyReqest.create({
      email: data.email,
      name: data.name,
      doc: data.doc,
    });

    return newUser;
  } catch (error: any) {
    console.error("Error during user profile insertion:", error);
  }
};

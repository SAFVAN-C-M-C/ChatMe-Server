import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import { IUsers } from "@/domain/entities";
import { CompanyReqest } from "../model/ComapanyRequest";
import { RecruiterReqest } from "../model/RecruiterRequests";
import {
  IComapanyRequest,
  IRecruiterRequest,
} from "@/domain/entities/Requests";

export const verifyRequest = async (data: {
  email?: string;
  isVerified?: boolean;
  type?: string;
}): Promise<IRecruiterRequest[] | IComapanyRequest[] | null> => {
  try {
    let requestData: IRecruiterRequest[] | IComapanyRequest[] | null = null;
    if (data.type === "company") {
      const users = await Company.findOneAndUpdate(
        {
          email: data.email,
        },
        {
          $set: { isVerified: data.isVerified }, // Update the matched document
        },
        {
          new: true,
        }
      );
      const request = await CompanyReqest.deleteOne({ email: data.email });
      requestData = await CompanyReqest.find({
        email: { $ne: data.email },
      }).exec();
    } else if (data.type === "user") {
      const users = await Users.findOneAndUpdate(
        {
          email: data.email,
        },
        {
          $set: { isVerified: data.isVerified }, // Update the matched document
        },
        {
          new: true,
        }
      );
      const request = await RecruiterReqest.deleteOne({ email: data.email });
      requestData = await RecruiterReqest.find({
        email: { $ne: data.email },
      }).exec();
    }
    return requestData;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

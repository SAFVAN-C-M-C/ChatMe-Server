import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import { IUsers } from "@/domain/entities";
import { CompanyReqest } from "../model/ComapanyRequest";
import { RecruiterReqest } from "../model/RecruiterRequests";
import {
  IComapanyRequest,
  IRecruiterRequest,
} from "@/domain/entities/Requests";

export const blockUser = async (data: {
  email?: string;
  isBlocked?:boolean;
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
          $set: { isBlocked: data.isBlocked }, // Update the matched document
        },
        {
          new: true,
        }
      );
      requestData = await Company.find({}).exec();
    } else if (data.type === "user") {
      const users = await Users.findOneAndUpdate(
        {
          email: data.email,
        },
        {
          $set: { isBlocked: true }, // Update the matched document
        },
        {
          new: true,
        }
      );
      requestData = await Users.find({}).exec();
    }
    return requestData;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

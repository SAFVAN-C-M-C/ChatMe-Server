import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import {
  IComapanyRequest,
  IRecruiterRequest,
} from "@/domain/entities/Requests";
import { Types } from "mongoose";

export const blockUser = async (data: {
  userId?: string;
  isBlocked?: boolean;
  type?: string;
}): Promise<IRecruiterRequest[] | IComapanyRequest[] | null> => {
  try {
    let requestData: IRecruiterRequest[] | IComapanyRequest[] | null = null;
    if (data.type === "company") {
      const users = await Company.findOneAndUpdate(
        {
          userId: new Types.ObjectId(String(data.userId)),
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
          userId: new Types.ObjectId(String(data.userId)),
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

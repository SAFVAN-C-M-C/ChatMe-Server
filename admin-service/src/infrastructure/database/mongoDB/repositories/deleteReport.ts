import { IReports } from "@/domain/entities";
import { Reports } from "../model";
import { Types } from "mongoose";

export const deleteReport = async (id: string): Promise<IReports[] | null> => {
  try {
    const request = await Reports.deleteOne({
      _id: new Types.ObjectId(String(id)),
    });
    const requestData = await Reports.find({
      _id: { $ne: new Types.ObjectId(String(id)) },
    }).exec();

    return requestData as IReports[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

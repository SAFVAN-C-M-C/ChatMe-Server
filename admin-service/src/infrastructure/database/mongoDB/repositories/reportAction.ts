import { IReports } from "@/domain/entities";
import { Reports, Users } from "../model";
import { Types } from "mongoose";

export const reportAction = async (data: {
  userId: string;
  reportId: string;
}): Promise<IReports[] | null> => {
  try {
    const users = await Users.findOneAndUpdate(
      {
        userId: new Types.ObjectId(String(data.userId)),
      },
      { $inc: { numberOfReportActions: 1 } },
      { new: true }
    );
    const request = await Reports.deleteOne({
      _id: new Types.ObjectId(String(data.reportId)),
    });
    const requestData = await Reports.find({
      _id: { $ne: new Types.ObjectId(String(data.reportId)) },
    }).exec();

    return requestData as IReports[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

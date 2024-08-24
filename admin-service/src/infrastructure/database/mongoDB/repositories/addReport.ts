import { IReports, ReportDetails } from "@/domain/entities";
import { Reports } from "../model";
import { Types } from "mongoose";

export const addReport = async (
  data: ReportDetails
): Promise<IReports | null> => {
  try {
    // Safely handle optional fields and convert strings to ObjectId
    const dataToCreate = {
      userId: data.userId ? new Types.ObjectId(String(data.userId)) : undefined,
      suspectId: data.suspectId
        ? new Types.ObjectId(String(data.suspectId))
        : undefined,
      reason: data.reason,
      postId: data.postId ? new Types.ObjectId(String(data.postId)) : undefined,
    };

    const newRequest = await Reports.create(dataToCreate);

    if (!newRequest) {
      throw new Error("Report can't be created");
    }

    return newRequest as IReports;
  } catch (error: any) {
    console.error("Error during report creation:", error);
    return null;
  }
};

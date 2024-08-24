import { IGetReports, IReports } from "@/domain/entities";
import { Reports } from "../model";

export const getReports = async (
  page: number,
  limit: number
): Promise<IGetReports | null> => {
  try {
    const skip = (page - 1) * limit;
    const totalUsers = await Reports.countDocuments();
    const reports = await Reports.find().skip(skip).limit(limit);

    return {
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      data: reports as IReports[],
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

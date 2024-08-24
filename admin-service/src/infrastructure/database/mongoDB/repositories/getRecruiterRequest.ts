import { IGetRecruiterRequest, IRecruiterRequest } from "@/domain/entities";
import { RecruiterReqest } from "../model/RecruiterRequests";

export const getRecruiterRequest = async (
  page: number,
  limit: number
): Promise<IGetRecruiterRequest | null> => {
  try {
    const skip = (page - 1) * limit;
    const totalUsers = await RecruiterReqest.countDocuments();
    const recruiterRequests = await RecruiterReqest.find()
      .skip(skip)
      .limit(limit);

    return {
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      data: recruiterRequests as IRecruiterRequest[],
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

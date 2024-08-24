import { IComapanyRequest, IGetComapanyRequest } from "@/domain/entities";
import { CompanyReqest } from "../model/ComapanyRequest";

export const getCompanyRequest = async (
  page: number,
  limit: number
): Promise<IGetComapanyRequest | null> => {
  try {
    const skip = (page - 1) * limit;
    const totalUsers = await CompanyReqest.countDocuments();
    const companiesRequests = await CompanyReqest.find()
      .skip(skip)
      .limit(limit);

    return {
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      data: companiesRequests as IComapanyRequest[],
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

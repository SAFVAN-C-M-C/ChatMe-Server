import { Company } from "@/infrastructure/database/mongoDB/model";
import { ICompany, IGetCompany } from "@/domain/entities";

export const getCompanies = async (
  page: number,
  limit: number
): Promise<IGetCompany | null> => {
  try {
    const skip = (page - 1) * limit;
    const totalUsers = await Company.countDocuments();
    const companies = await Company.find().skip(skip).limit(limit);

    return {
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      data: companies as ICompany[],
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

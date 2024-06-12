import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import { ICompany, IUsers } from "@/domain/entities";
import { CompanyReqest } from "../model/ComapanyRequest";

export const getCompanyRequest = async (): Promise<ICompany[] | null> => {
  try {
    const users = await CompanyReqest.find();
    console.log(users);
    
    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

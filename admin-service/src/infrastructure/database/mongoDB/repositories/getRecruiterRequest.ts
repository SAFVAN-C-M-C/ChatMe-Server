import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import { ICompany, IUsers } from "@/domain/entities";
import { CompanyReqest } from "../model/ComapanyRequest";
import { RecruiterReqest } from "../model/RecruiterRequests";

export const getRecruiterRequest = async (): Promise<ICompany[] | null> => {
  try {
    const users = await RecruiterReqest.find();
    console.log(users);
    
    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

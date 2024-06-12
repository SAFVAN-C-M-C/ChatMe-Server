import { Company, Users } from "@/infrastructure/database/mongoDB/model";
import { ICompany, IUsers } from "@/domain/entities";

export const getCompanies = async (): Promise<ICompany[] | null> => {
  try {
    const users = await Company.find();
    console.log(users);
    
    return users;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

import { IReports } from "@/domain/entities";
import { Reports } from "../model";


export const getReports = async (): Promise<IReports[] | null> => {
  try {
    const users = await Reports.find();
    console.log(users);
    
    return users as IReports[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

import { createCompany } from "../database/mongoDB/repositories/createCompany";

interface IData {
  name: string;
  email: string;
  userId?: string ;
  doc?:string
}

export const addCompanyService = async (data: IData) => {
  try {
    const userData = await createCompany(data);
    console.log(userData, "===========");
  } catch (error) {
    console.log(error);
  }
};

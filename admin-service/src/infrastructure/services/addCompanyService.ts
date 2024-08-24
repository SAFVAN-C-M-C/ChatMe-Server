import { createCompany } from "../database/mongoDB/repositories/createCompany";

interface IData {
  name: string;
  email: string;
  userId?: string;
  doc?: string;
}

export const addCompanyService = async (data: IData) => {
  try {
    const userData = await createCompany(data);
  } catch (error) {
    console.error(error);
  }
};

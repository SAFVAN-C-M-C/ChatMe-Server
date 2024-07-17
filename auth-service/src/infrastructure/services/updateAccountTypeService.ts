import { updateAccountType } from "../database/mongodb/repositories/updateAccountType";

export const updateAccountTypeService = async (data:{userId: string, accountType: string}) => {
    try {
      const userData=await updateAccountType(
        data
      );
      console.log(userData,"===========");
    } catch (error) {
      console.log(error);
    }
  };
  
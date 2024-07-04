import { updateBlockStatus } from "../database/mongodb/repositories/updateBlockStatus";

export const updateBlockStatusService = async (data:{userId: string, isBlocked: boolean}) => {
    try {
      const userData=await updateBlockStatus(
        data
      );
      console.log(userData,"===========");
    } catch (error) {
      console.log(error);
    }
  };
  
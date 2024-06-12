import { createUser } from "@/infrastructure/database/mongodb/repositories/createUser";
import { updateVerification } from "../database/mongodb/repositories/updateVerification";

export const updateVerificationService = async (data:{email: string, isVerified: boolean}) => {
    try {
      const userData=await updateVerification(
        data
      );
      console.log(userData,"===========");
    } catch (error) {
      console.log(error);
    }
  };
  
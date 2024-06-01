import { createUser } from "@/infrastructure/database/mongodb/repositories/createUser";

export const addUserService = async (email: string, userId: string) => {
    try {
      const userData=await createUser({
        email,
        userId,
      });
      console.log(userData,"===========");
    } catch (error) {
      console.log(error);
    }
  };
  
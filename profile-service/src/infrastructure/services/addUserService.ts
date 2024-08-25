import { createUser } from "@/infrastructure/database/mongodb/repositories/createUser";

export const addUserService = async (email: string, userId: string) => {
  try {
    const userData = await createUser({
      email,
      userId,
    });
  } catch (error) {
    console.error(error);
  }
};

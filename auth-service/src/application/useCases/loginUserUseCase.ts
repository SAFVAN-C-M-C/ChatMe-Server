import { IDependencies } from "@/application/interfaces/IDependencies";

export const loginUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        return await findByEmail(email);
      } catch (error: any) {
        console.log("<< Something went wrong in loginUserUseCase >>");
        throw new Error(error.message || "login user failed");
      }
    },
  };
};

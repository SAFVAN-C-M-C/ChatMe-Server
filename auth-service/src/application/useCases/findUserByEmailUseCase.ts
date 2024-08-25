import { IDependencies } from "@/application/interfaces/IDependencies";

export const findUserByEmailUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findByEmail },
  } = dependencies;

  return {
    execute: async (email?: string, google: boolean = false) => {
      try {
        return await findByEmail(email, google);
      } catch (error: any) {
        console.log("<< Something went wrong in findUserByEmailUseCase >>");
        throw new Error(error.message || "Find user by email failed");
      }
    },
  };
};

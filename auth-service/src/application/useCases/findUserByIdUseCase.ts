import { IDependencies } from "@/application/interfaces/IDependencies";

export const findUserByIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findById },
  } = dependencies;

  return {
    execute: async (id: string) => {
      try {
        return await findById(id);
      } catch (error: any) {
        console.log("<< Something went wrong in findUserByIdUseCase >>");
        throw new Error(error.message || "find user by id failed");
      }
    },
  };
};

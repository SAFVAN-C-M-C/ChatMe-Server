import { IDependencies } from "@/application/interfaces/IDependencies";

export const getUsersUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getUsers },
  } = dependencies;

  return {
    execute: async (page: number, limit: number) => {
      return await getUsers(page, limit);
    },
  };
};

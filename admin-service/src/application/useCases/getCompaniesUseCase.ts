import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCompaniesUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getCompanies },
  } = dependencies;

  return {
    execute: async (page: number, limit: number) => {
      return await getCompanies(page, limit);
    },
  };
};

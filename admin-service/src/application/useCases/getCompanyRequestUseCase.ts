import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCompanyRequestUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getCompanyRequest },
  } = dependencies;

  return {
    execute: async (page: number, limit: number) => {
      return await getCompanyRequest(page, limit);
    },
  };
};

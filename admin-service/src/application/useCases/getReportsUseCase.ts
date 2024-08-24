import { IDependencies } from "@/application/interfaces/IDependencies";

export const getReportsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getReports },
  } = dependencies;

  return {
    execute: async (page: number, limit: number) => {
      return await getReports(page, limit);
    },
  };
};

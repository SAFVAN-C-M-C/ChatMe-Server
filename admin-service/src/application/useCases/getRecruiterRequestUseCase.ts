import { IDependencies } from "@/application/interfaces/IDependencies";

export const getRecruiterRequestUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getRecruiterRequest },
  } = dependencies;

  return {
    execute: async (page: number, limit: number) => {
      return await getRecruiterRequest(page, limit);
    },
  };
};

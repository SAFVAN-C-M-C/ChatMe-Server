import { IDependencies } from "@/application/interfaces/IDependencies";

export const reportActionUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { reportAction },
  } = dependencies;

  return {
    execute: async (data: { userId: string; reportId: string }) => {
      return await reportAction(data);
    },
  };
};

import { IDependencies } from "@/application/interfaces/IDependencies";

export const deleteReportUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { deleteReport },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await deleteReport(id);
    },
  };
};

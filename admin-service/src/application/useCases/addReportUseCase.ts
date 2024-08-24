import { IDependencies } from "@/application/interfaces/IDependencies";
import { ReportDetails } from "@/domain/entities";

export const addReportUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { addReport },
  } = dependencies;

  return {
    execute: async (data: ReportDetails) => {
      return await addReport(data);
    },
  };
};

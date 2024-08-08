import { IDependencies } from "@/application/interfaces/IDependencies";
import { ParamsForUserDataChart } from "@/domain/entities";

export const getDataForChartUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getDataForChart },
  } = dependencies;

  return {
    execute: async (data: ParamsForUserDataChart) => {
      return await getDataForChart(data);
    },
  };
};

import { ParamsForPostDataChart } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const getDataForChartUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getDataForChart },
  } = dependencies;

  return {
    execute: async (data: ParamsForPostDataChart) => {
      return await getDataForChart(data);
    },
  };
};

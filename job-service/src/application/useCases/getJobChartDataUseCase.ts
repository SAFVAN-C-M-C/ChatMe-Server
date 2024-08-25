
import {   ParamsForJobDataChart } from "@/domain/entities/Jobs";
import { IDependencies } from ".././interfaces/IDependencies";

export const getJobChartDataUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobChartData },
  } = dependencies;
  return{
    execute: async (data:ParamsForJobDataChart) => {
    try {
      return await getJobChartData(data);
    } catch (error:any) {
      console.error("<< Something went wrong in get job chat data useCase >>");
      throw new Error(error.message || "Job creation failed");
    }
  }
  }
};

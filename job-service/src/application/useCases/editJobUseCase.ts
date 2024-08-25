
import {  IEditJob } from "@/domain/entities/Jobs";
import { IDependencies } from ".././interfaces/IDependencies";

export const editJobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { editJob },
  } = dependencies;
  return{
    execute: async (data:IEditJob) => {
    try {
      return await editJob(data);
    } catch (error:any) {
      console.error("<< Something went wrong in edit job useCase >>");
      throw new Error(error.message || "Job creation failed");
    }
  }
  }
};

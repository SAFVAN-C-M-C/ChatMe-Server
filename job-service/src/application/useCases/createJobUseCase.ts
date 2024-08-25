
import { ICreateJob } from "@/domain/entities/Jobs";
import { IDependencies } from ".././interfaces/IDependencies";

export const createJobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createJob },
  } = dependencies;
  return{
    execute: async (data:ICreateJob) => {
    try {
      return await createJob(data);
    } catch (error:any) {
      console.error("<< Something went wrong in create job useCase >>");
      throw new Error(error.message || "Job creation failed");
    }
  }
  }
};

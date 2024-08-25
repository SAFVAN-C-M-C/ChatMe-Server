
import {  IEditJob } from "@/domain/entities/Jobs";
import { IDependencies } from ".././interfaces/IDependencies";

export const deletejobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { deletejob },
  } = dependencies;
  return{
    execute: async (data:{userId:string,jobId:string}) => {
    try {
      return await deletejob(data);
    } catch (error:any) {
      console.error("<< Something went wrong in delete job useCase >>");
      throw new Error(error.message || "Job creation failed");
    }
  }
  }
};

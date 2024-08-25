import { IDependencies } from ".././interfaces/IDependencies";
import { GetApplicationParams } from "@/domain/entities";

export const getJobApplicationsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobApplications },
  } = dependencies;
  return{
    execute: async (data:GetApplicationParams) => {
    try {
      return await getJobApplications(data);
    } catch (error:any) {
      console.error("<< Something went wrong in get job application useCase >>");
      throw new Error(error.message || "geting job application failed");
    }
  }
  }
};

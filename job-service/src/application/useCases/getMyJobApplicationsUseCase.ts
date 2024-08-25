import { IDependencies } from ".././interfaces/IDependencies";
import { GetMyApplicationParams } from "@/domain/entities";

export const getMyJobApplicationsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getMyJobApplications },
  } = dependencies;
  return{
    execute: async (data:GetMyApplicationParams) => {
    try {
      return await getMyJobApplications(data);
    } catch (error:any) {
      console.error("<< Something went wrong in get job my application useCase >>");
      throw new Error(error.message || "geting job my application failed");
    }
  }
  }
};

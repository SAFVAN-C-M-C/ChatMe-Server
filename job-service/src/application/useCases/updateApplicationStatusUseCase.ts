import { UpdateStatus } from "@/domain/entities";
import { IDependencies } from ".././interfaces/IDependencies";

export const updateApplicationStatusUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updateApplicationStatus },
  } = dependencies;
  return{
    execute: async (data:UpdateStatus) => {
    try {
      return await updateApplicationStatus(data);
    } catch (error:any) {
      console.error("<< Something went wrong in update applicaiton status  useCase >>");
      throw new Error(error.message || "Application status updation failed");
    }
  }
  }
};

import { IDependencies } from ".././interfaces/IDependencies";
import { ApplicationParams } from "@/domain/entities";

export const applyForJobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { applyForJob },
  } = dependencies;
  return {
    execute: async (data: ApplicationParams) => {
      try {
        return await applyForJob(data);
      } catch (error: any) {
        console.error("<< Something went wrong in apply job useCase >>");
        throw new Error(error.message || "applcation creation failed");
      }
    },
  };
};

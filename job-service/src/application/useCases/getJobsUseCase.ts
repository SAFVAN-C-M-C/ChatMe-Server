import { IDependencies } from ".././interfaces/IDependencies";

export const getJobsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobs },
  } = dependencies;
  return{
    execute: async () => {
    try {
      return await getJobs();
    } catch (error:any) {
      console.log("<< Something went wrong in get job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

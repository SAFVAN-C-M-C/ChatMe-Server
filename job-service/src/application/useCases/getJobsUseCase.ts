import { IDependencies } from ".././interfaces/IDependencies";

export const getJobsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobs },
  } = dependencies;
  return{
    execute: async (filter:string) => {
    try {
      return await getJobs(filter);
    } catch (error:any) {
      console.log("<< Something went wrong in get job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

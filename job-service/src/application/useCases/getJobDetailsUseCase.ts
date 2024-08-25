import { IDependencies } from ".././interfaces/IDependencies";

export const getJobDetailsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobDetails },
  } = dependencies;
  return{
    execute: async (id:string) => {
    try {
      return await getJobDetails(id);
    } catch (error:any) {
      console.error("<< Something went wrong in get job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

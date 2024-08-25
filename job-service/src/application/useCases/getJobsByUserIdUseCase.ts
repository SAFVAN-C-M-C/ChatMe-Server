import { IDependencies } from ".././interfaces/IDependencies";

export const getJobsByUserIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getJobsByUserId },
  } = dependencies;
  return{
    execute: async (id:string) => {
    try {
      return await getJobsByUserId(id);
    } catch (error:any) {
      console.error("<< Something went wrong in get my job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

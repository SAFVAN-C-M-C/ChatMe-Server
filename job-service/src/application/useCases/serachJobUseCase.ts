import { IDependencies } from ".././interfaces/IDependencies";

export const serachJobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { searchJob },
  } = dependencies;
  return{
    execute: async (data:{searchKey:string,filter:string}) => {
    try {
      return await searchJob(data);
    } catch (error:any) {
      console.error("<< Something went wrong in get search job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

import { IDependencies } from ".././interfaces/IDependencies";

export const serachJobUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { serachJob },
  } = dependencies;
  return{
    execute: async (data:{searchKey:string}) => {
    try {
      return await serachJob(data);
    } catch (error:any) {
      console.log("<< Something went wrong in get search job useCase >>");
      throw new Error(error.message || "Job fetchingg failed");
    }
  }
  }
};

import { IDependencies } from "../interfaces/IDependencies";

export const searchPostUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { searchPost },
  } = dependencies;

  return {
    execute: async (data: { searchKey: string }) => {
      return await searchPost(data);
    },
  };
};

import { IDependencies } from "../interfaces/IDependencies";

export const getMyChatsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getMyChats },
  } = dependencies;
  return {
    execute: async (id: string) => {
      return await getMyChats(id);
    },
  };
};

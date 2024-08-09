import { IDependencies } from "../interfaces/IDependencies";

export const getUserSuggestionsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getUserSuggestions },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      return await getUserSuggestions(userId);
    },
  };
};

import { IGetComments } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const getCommentsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getComments },
  } = dependencies;

  return {
    execute: async (data:IGetComments) => {
      return await getComments(data);
    },
  };
};

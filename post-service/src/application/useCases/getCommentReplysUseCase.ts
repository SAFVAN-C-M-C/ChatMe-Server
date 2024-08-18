import { IGetComments, IGetCommentsReplys } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const getCommentReplysUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getCommentReplys },
  } = dependencies;

  return {
    execute: async (data:IGetCommentsReplys) => {
      return await getCommentReplys(data);
    },
  };
};

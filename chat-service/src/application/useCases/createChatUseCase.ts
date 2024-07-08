import { IChat } from "@/domain/entities/Chat";
import { IDependencies } from "../interfaces/IDependencies";

export const createChatUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createChat },
  } = dependencies;
  return {
    execute: async (data: IChat) => {
      return await createChat(data);
    },
  };
};

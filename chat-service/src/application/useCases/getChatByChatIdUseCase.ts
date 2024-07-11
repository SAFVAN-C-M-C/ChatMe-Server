import { CreateChat, GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { IDependencies } from "../interfaces/IDependencies";

export const getChatByChatIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getChatByChatId },
  } = dependencies;
  return {
    execute: async (id: string) => {
      return await getChatByChatId(id);
    },
  };
};

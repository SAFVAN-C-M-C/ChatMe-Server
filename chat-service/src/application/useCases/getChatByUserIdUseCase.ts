import { GetChatByUserId } from "@/domain/entities/Chat";
import { IDependencies } from "../interfaces/IDependencies";

export const getChatByUserIdUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getChatByUserId },
  } = dependencies;
  return {
    execute: async (data: GetChatByUserId) => {
      return await getChatByUserId(data);
    },
  };
};

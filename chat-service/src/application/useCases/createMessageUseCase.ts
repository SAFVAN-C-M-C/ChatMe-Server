import { CreateMessageData } from "@/domain/entities/Chat";
import { IDependencies } from "../interfaces/IDependencies";

export const createMessageUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createMessage },
  } = dependencies;
  return {
    execute: async (data: CreateMessageData) => {
      return await createMessage(data);
    },
  };
};

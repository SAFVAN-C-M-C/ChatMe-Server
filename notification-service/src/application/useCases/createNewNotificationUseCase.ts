import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatNewNotification } from "@/domain/entity";

export const createNewNotificationUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { createNewNotification },
  } = dependencies;

  return {
    execute: async (data: CreatNewNotification) => {
      return await createNewNotification(data);
    },
  };
};

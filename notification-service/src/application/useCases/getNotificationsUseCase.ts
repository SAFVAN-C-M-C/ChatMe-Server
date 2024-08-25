import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatNewNotification } from "@/domain/entity";

export const getNotificationsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getNotifications },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await getNotifications(id);
    },
  };
};

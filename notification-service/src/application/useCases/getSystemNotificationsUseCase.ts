import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatNewNotification } from "@/domain/entity";

export const getSystemNotificationsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getSystemNotifications },
  } = dependencies;

  return {
    execute: async () => {
      return await getSystemNotifications();
    },
  };
};

import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreatNewNotification } from "@/domain/entity";

export const deleteSystemNotificationUseCase = (
  dependencies: IDependencies
) => {
  const {
    repositories: { deleteSystemNotification },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await deleteSystemNotification(id);
    },
  };
};

import { CreatNewNotification, INotification } from "@/domain/entity";

export interface IRepositories {
  getNotifications: (id: string) => Promise<INotification[] | null>;
  getSystemNotifications: () => Promise<INotification[] | null>;
  createNewNotification: (
    data: CreatNewNotification
  ) => Promise<INotification | null>;
  deleteSystemNotification: (id: string) => Promise<any | null>;
}

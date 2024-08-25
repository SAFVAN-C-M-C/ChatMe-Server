import { INotification } from "../entity";

export interface IGetNotificationsUseCase {
  execute(id: string): Promise<INotification[] | null>;
}

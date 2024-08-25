import { CreatNewNotification, INotification } from "../entity";

export interface ICreateNewNotificationUseCase {
  execute(data: CreatNewNotification): Promise<INotification | null>;
}

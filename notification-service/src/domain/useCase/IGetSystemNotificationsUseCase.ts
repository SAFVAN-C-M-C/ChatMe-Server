import { INotification } from "../entity";

export interface IGetSystemNotificationsUseCase {
    execute(): Promise<INotification[] | null>;
}
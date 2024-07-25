import {  INotification } from "../entity";

export interface IDeleteSystemNotificationUseCase {
    execute(id: string): Promise<any | null>;
}
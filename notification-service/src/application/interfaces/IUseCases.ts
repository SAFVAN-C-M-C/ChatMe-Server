
import { ICreateNewNotificationUseCase, IGetNotificationsUseCase } from "@/domain/useCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    getNotificationsUseCase:(dependencies:IDependencies)=>IGetNotificationsUseCase;
    createNewNotificationUseCase:(dependencies:IDependencies)=>ICreateNewNotificationUseCase;
}

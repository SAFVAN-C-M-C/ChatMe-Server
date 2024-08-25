import {
  ICreateNewNotificationUseCase,
  IDeleteSystemNotificationUseCase,
  IGetNotificationsUseCase,
  IGetSystemNotificationsUseCase,
} from "@/domain/useCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  getNotificationsUseCase: (
    dependencies: IDependencies
  ) => IGetNotificationsUseCase;
  getSystemNotificationsUseCase: (
    dependencies: IDependencies
  ) => IGetSystemNotificationsUseCase;
  createNewNotificationUseCase: (
    dependencies: IDependencies
  ) => ICreateNewNotificationUseCase;
  deleteSystemNotificationUseCase: (
    dependencies: IDependencies
  ) => IDeleteSystemNotificationUseCase;
}

import {
  ICreateChatUseCase,
  ICreateMessageUseCase,
  IGetChatByChatIdUseCase,
  IGetChatByUserIdUseCase,
  IGetMyChatsUseCase,
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  createChatUseCase: (dependencies: IDependencies) => ICreateChatUseCase;
  getChatByUserIdUseCase: (
    dependencies: IDependencies
  ) => IGetChatByUserIdUseCase;
  getChatByChatIdUseCase: (
    dependencies: IDependencies
  ) => IGetChatByChatIdUseCase;
  getMyChatsUseCase: (dependencies: IDependencies) => IGetMyChatsUseCase;
  createMessageUseCase: (dependencies: IDependencies) => ICreateMessageUseCase;
}

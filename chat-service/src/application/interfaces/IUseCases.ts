import { ICreateChatUseCase, IGetChatByUserIdUseCase, IGetMyChatsUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";
import { IGetChatByChatIdUseCase } from "@/domain/useCases/IGetChatByChatIdUseCase";

export interface IUseCases {
    createChatUseCase:(dependencies:IDependencies)=>ICreateChatUseCase;
    getChatByUserIdUseCase:(dependencies:IDependencies)=>IGetChatByUserIdUseCase;
    getChatByChatIdUseCase:(dependencies:IDependencies)=>IGetChatByChatIdUseCase;
    getMyChatsUseCase:(dependencies:IDependencies)=>IGetMyChatsUseCase;
}

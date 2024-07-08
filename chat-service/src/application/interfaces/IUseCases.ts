import { ICreateChatUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createChatUseCase:(dependencies:IDependencies)=>ICreateChatUseCase;
}

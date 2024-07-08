import { IChat } from "../entities/Chat";


export interface ICreateChatUseCase{
    execute(data:IChat):Promise<IChat | null>;
}
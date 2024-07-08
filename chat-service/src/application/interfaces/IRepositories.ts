import { IChat } from "@/domain/entities/Chat";

export interface IRepositories {
    createChat:(data:any)=>Promise<IChat|null>;
}

import { IUserProfile } from "../entities";


export interface  IGetUserSuggestionsUseCase{
    execute(userId:string): Promise<any[] | null>;
}
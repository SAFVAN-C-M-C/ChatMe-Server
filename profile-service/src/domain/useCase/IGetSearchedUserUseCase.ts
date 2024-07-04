import { IUserProfile } from "../entities";


export interface IGetSearchedUserUseCase {
    execute(data: {searchKey:string}): Promise<IUserProfile[] | null>;
}
import { IUserProfile, UserShocaseDeatials } from "../entities";


export interface IGetUserDetailsByUserIdUseCase {
    execute(id:string): Promise<UserShocaseDeatials | null>;
}
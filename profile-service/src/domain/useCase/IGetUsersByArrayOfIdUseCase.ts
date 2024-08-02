import { IUserProfile, UserShocaseDeatials ,IGetUsersArrayOfId} from "../entities";


export interface IGetUsersByArrayOfIdUseCase {
    execute(data:IGetUsersArrayOfId): Promise<any[] | null>;
}
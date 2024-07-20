
import { Experience, IUserProfile } from "../entities";


export interface IChangeTheamUseCase {
    execute(data:{id:string,theam:string}): Promise<IUserProfile | null>;
}
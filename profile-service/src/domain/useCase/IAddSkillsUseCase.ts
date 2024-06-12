
import { Experience, IUserProfile } from "../entities";


export interface IAddSkillsUseCase {
    execute(data: {email?:string,skills?:string[]}): Promise<IUserProfile | null>;
}
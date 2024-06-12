
import { Experience, IUserProfile } from "../entities";


export interface IAddExperienceUsecase {
    execute(data: Experience): Promise<IUserProfile | null>;
}

import { AddResume, IUserProfile } from "../entities";


export interface IAddResumeToProfileUseCase {
    execute(data: AddResume): Promise<IUserProfile | null>;
}

import { DeleteResume,IUserProfile } from "../entities";


export interface IDeleteResumeFromProfileUseCase {
    execute(data: DeleteResume): Promise<IUserProfile | null | undefined>;
}
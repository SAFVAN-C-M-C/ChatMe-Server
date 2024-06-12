
import { Experience, IUserProfile } from "../entities";


export interface IAddPreferedJobsUseCase {
    execute(data: {email?:string,preferedJobs?:string[]}): Promise<IUserProfile | null>;
}
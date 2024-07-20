import { ICreateJob, IJobs } from "@/domain/entities/Jobs";


export interface IRepositories {
    createJob:(data:ICreateJob)=>Promise<IJobs | null>
}

import { ICreateJob, IJobs } from "@/domain/entities/Jobs";


export interface IRepositories {
    createJob:(data:ICreateJob)=>Promise<IJobs | null>;
    getJobs:()=>Promise<IJobs[] | null>;
    getJobDetails:(id:string)=>Promise<IJobs | null>;
}

import { ICreateJob, IEditJob, IJobs } from "@/domain/entities/Jobs";


export interface IRepositories {
    createJob:(data:ICreateJob)=>Promise<IJobs | null>;
    getJobs:()=>Promise<IJobs[] | null>;
    getJobDetails:(id:string)=>Promise<IJobs | null>;
    editJob:(data:IEditJob)=>Promise<IJobs | null>;
    deletejob:(date:{userId:string,jobId:string})=>Promise<any | null>;
    serachJob:(data:{searchKey:string})=>Promise<IJobs[] | null>;
    getJobsByUserId:(userId:string)=>Promise<IJobs[] | null>; 
}

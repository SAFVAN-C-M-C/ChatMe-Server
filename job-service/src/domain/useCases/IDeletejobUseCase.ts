import {  IEditJob, IJobs } from "../entities/Jobs";

export interface IDeletejobUseCase {
    execute(data: {userId:string,jobId:string}): Promise<any | null>;
}
import { ICreateJob, IJobs } from "../entities/Jobs";

export interface IGetJobDetailsUseCase {
    execute(id:string): Promise<IJobs | null>;
}
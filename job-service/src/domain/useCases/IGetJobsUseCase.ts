import { IJobs } from "../entities/Jobs";

export interface IGetJobsUseCase {
    execute(filter:string): Promise<IJobs[] | null>;
}
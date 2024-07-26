import { IJobs } from "../entities/Jobs";

export interface IGetJobsUseCase {
    execute(): Promise<IJobs[] | null>;
}
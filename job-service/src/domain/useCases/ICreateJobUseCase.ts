import { ICreateJob, IJobs } from "../entities/Jobs";

export interface ICreateJobUseCase {
    execute(data: ICreateJob): Promise<IJobs | null>;
}
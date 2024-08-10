import { UpdateStatus } from "../entities";
import { ICreateJob, IJobs } from "../entities/Jobs";

export interface IUpdateApplicationStatusUseCase {
    execute(data:UpdateStatus): Promise<any | null>;
}
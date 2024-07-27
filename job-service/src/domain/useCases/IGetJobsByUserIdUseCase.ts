import { IJobs } from "../entities/Jobs";

export interface IGetJobsByUserIdUseCase {
    execute(id:string): Promise<IJobs[] | null>;
}
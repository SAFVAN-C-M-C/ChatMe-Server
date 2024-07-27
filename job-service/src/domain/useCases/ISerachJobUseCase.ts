import { ICreateJob, IJobs } from "../entities/Jobs";

export interface ISerachJobUseCase {
    execute(data:{searchKey:string}): Promise<IJobs[] | null>;
}
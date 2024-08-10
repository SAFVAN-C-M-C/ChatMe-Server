import { ICreateJob, IJobs } from "../entities/Jobs";

export interface ISerachJobUseCase {
    execute(data:{searchKey:string,filter:string}): Promise<IJobs[] | null>;
}
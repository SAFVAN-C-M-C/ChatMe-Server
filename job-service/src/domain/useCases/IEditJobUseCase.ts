import {  IEditJob, IJobs } from "../entities/Jobs";

export interface IEditJobUseCase {
    execute(data: IEditJob): Promise<IJobs | null>;
}
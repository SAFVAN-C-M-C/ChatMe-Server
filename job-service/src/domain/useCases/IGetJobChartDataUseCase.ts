import {  ParamsForJobDataChart } from "../entities/Jobs";

export interface IGetJobChartDataUseCase {
    execute(data: ParamsForJobDataChart): Promise<any[] | null>;
}
import { ParamsForPostDataChart } from "../entities";


export interface IGetDataForChartUseCase {
    execute(data:ParamsForPostDataChart): Promise<any[] | null>;
}
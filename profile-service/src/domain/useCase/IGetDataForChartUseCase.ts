import { IUserProfile, ParamsForUserDataChart } from "@/domain/entities";

export interface IGetDataForChartUseCase {
    execute(data:ParamsForUserDataChart): Promise<any[] | null>;
}
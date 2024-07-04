import { IReports } from "../entities";


export interface IGetReportsUseCase {
    execute(): Promise<IReports[] | null>;
}
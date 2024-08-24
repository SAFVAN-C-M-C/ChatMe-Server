import { IGetReports } from "../entities";

export interface IGetReportsUseCase {
  execute(page: number, limit: number): Promise<IGetReports | null>;
}

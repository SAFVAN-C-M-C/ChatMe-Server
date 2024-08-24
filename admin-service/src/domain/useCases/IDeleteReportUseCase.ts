import { IReports } from "../entities";

export interface IDeleteReportUseCase {
  execute(id: string): Promise<IReports[] | null>;
}

import { IReports } from "../entities";

export interface IReportActionUseCase {
  execute(data: {
    userId: string;
    reportId: string;
  }): Promise<IReports[] | null>;
}

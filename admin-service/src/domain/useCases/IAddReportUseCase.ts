import { IReports, ReportDetails } from "../entities";

export interface IAddReportUseCase {
  execute(data: ReportDetails): Promise<IReports | null>;
}

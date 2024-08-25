import {
  ApplicationParams,
  GetApplicationParams,
  GetMyApplicationParams,
  IApplication,
  ICreateJob,
  IEditJob,
  IJobs,
  ParamsForJobDataChart,
  UpdateStatus,
} from "@/domain/entities";

export interface IRepositories {
  createJob: (data: ICreateJob) => Promise<IJobs | null>;
  getJobs: (filter: string) => Promise<IJobs[] | null>;
  getJobDetails: (id: string) => Promise<IJobs | null>;
  editJob: (data: IEditJob) => Promise<IJobs | null>;
  deletejob: (date: { userId: string; jobId: string }) => Promise<any | null>;
  searchJob: (data: {
    searchKey: string;
    filter: string;
  }) => Promise<IJobs[] | null>;
  getJobsByUserId: (userId: string) => Promise<IJobs[] | null>;
  getJobChartData: (data: ParamsForJobDataChart) => Promise<any[] | null>;
  applyForJob: (data: ApplicationParams) => Promise<any | null>;
  getJobApplications: (
    data: GetApplicationParams
  ) => Promise<IApplication[] | null>;
  getMyJobApplications: (
    data: GetMyApplicationParams
  ) => Promise<IApplication[] | null>;
  updateApplicationStatus: (data: UpdateStatus) => Promise<any | null>;
}

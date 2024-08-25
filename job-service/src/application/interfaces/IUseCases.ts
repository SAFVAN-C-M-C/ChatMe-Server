import {
  ICreateJobUseCase,
  IDeletejobUseCase,
  IEditJobUseCase,
  IGetJobDetailsUseCase,
  IGetJobsUseCase,
  IGetJobsByUserIdUseCase,
  ISerachJobUseCase,
  IGetJobChartDataUseCase,
  IApplyForJobUseCase,
  IGetJobApplicationsUseCase,
  IUpdateApplicationStatusUseCase,
  IGetMyJobApplicationsUseCase,
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  createJobUseCase: (dependencies: IDependencies) => ICreateJobUseCase;
  getJobsUseCase: (dependencies: IDependencies) => IGetJobsUseCase;
  getJobDetailsUseCase: (dependencies: IDependencies) => IGetJobDetailsUseCase;
  editJobUseCase: (dependencies: IDependencies) => IEditJobUseCase;
  deletejobUseCase: (dependencies: IDependencies) => IDeletejobUseCase;
  serachJobUseCase: (dependencies: IDependencies) => ISerachJobUseCase;
  getJobsByUserIdUseCase: (
    dependencies: IDependencies
  ) => IGetJobsByUserIdUseCase;
  getJobChartDataUseCase: (
    dependencies: IDependencies
  ) => IGetJobChartDataUseCase;
  applyForJobUseCase: (dependencies: IDependencies) => IApplyForJobUseCase;
  getJobApplicationsUseCase: (
    dependencies: IDependencies
  ) => IGetJobApplicationsUseCase;
  updateApplicationStatusUseCase: (
    dependencies: IDependencies
  ) => IUpdateApplicationStatusUseCase;
  getMyJobApplicationsUseCase: (
    dependencies: IDependencies
  ) => IGetMyJobApplicationsUseCase;
}

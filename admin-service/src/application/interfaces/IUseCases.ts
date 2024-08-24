import {
  IAddReportUseCase,
  IBlockUserUseCase,
  IDeleteReportUseCase,
  IGetCompaniesUseCase,
  IGetCompanyRequestUseCase,
  IGetRecruiterRequestUseCase,
  IGetReportsUseCase,
  IGetUserUseCase,
  IReportActionUseCase,
  IUnBlockUserUseCase,
  IVerifyRequestUseCase,
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  getUsersUseCase: (dependencies: any) => IGetUserUseCase;
  getCompaniesUseCase: (dependencies: IDependencies) => IGetCompaniesUseCase;
  getCompanyRequestUseCase: (
    dependencies: IDependencies
  ) => IGetCompanyRequestUseCase;
  getRecruiterRequestUseCase: (
    dependencies: IDependencies
  ) => IGetRecruiterRequestUseCase;
  getReportsUseCase: (dependencies: IDependencies) => IGetReportsUseCase;
  verifyRequestUseCase: (dependencies: IDependencies) => IVerifyRequestUseCase;
  blockUserUseCase: (dependencies: IDependencies) => IBlockUserUseCase;
  unBlockUserUseCase: (dependencies: IDependencies) => IUnBlockUserUseCase;
  addReportUseCase: (dependencies: IDependencies) => IAddReportUseCase;
  reportActionUseCase: (dependencies: IDependencies) => IReportActionUseCase;
  deleteReportUseCase: (dependencies: IDependencies) => IDeleteReportUseCase;
}

import { IBlockUserUseCase, IGetCompaniesUseCase, IGetCompanyRequestUseCase, IGetRecruiterRequestUseCase, IGetUserUseCase, IUnBlockUserUseCase, IVerifyRequestUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
  getUsersUseCase:(dependencies: any)=>IGetUserUseCase;
  getCompaniesUseCase:(dependencies: IDependencies)=>IGetCompaniesUseCase;
  getCompanyRequestUseCase:(dependencies: IDependencies)=>IGetCompanyRequestUseCase;
  getRecruiterRequestUseCase:(dependencies: IDependencies)=>IGetRecruiterRequestUseCase;
  verifyRequestUseCase:(dependencies: IDependencies)=>IVerifyRequestUseCase;
  blockUserUseCase:(dependencies: IDependencies)=>IBlockUserUseCase;
  unBlockUserUseCase:(dependencies: IDependencies)=>IUnBlockUserUseCase;
}

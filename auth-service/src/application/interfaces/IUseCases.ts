import {
  IRegisterUserUseCase,
  ILoginUserUseCase,
  IFindUserByIdUseCase,
  IVerifyOtpUseCase,
  IUpdateUserPasswordUseCase,
  IAddRegisterDetailsUseCase,
  IUpdateUserFieldUseCase,
} from "@/domain/useCases";
import { IFindUserByEmailUseCase } from "@/domain/useCases/IFindUserByEmailUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  registerUserUseCase: (dependencies: IDependencies) => IRegisterUserUseCase;
  loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
  findUserByEmailUseCase: (
    dependencies: IDependencies
  ) => IFindUserByEmailUseCase;
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  verifyOtpUseCase: (dependencies: any) => IVerifyOtpUseCase;
  updateUserPasswordUseCase: (dependencies: any) => IUpdateUserPasswordUseCase;
  addRegisterDetailsUseCase: (
    dependencies: IDependencies
  ) => IAddRegisterDetailsUseCase;
  updateUserFieldUseCase: (
    dependencies: IDependencies
  ) => IUpdateUserFieldUseCase;
}

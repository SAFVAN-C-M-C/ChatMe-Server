import { IAapplyRecruiterUseCase, IFindUserByEmailUseCase, IFindUserByIdUseCase } from "@/domain/useCase";

export interface IUseCases {
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  applyRecruiterUseCase: (dependencies: any) => IAapplyRecruiterUseCase;
}

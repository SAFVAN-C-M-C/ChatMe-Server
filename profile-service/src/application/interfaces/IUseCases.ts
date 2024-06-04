import { IFindUserByIdUseCase } from "@/domain/useCase";

export interface IUseCases {
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
}

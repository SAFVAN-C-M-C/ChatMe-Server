import { IGetUserUseCase } from "@/domain/useCases";


export interface IUseCases {
  getUsersUseCase:(dependencies: any)=>IGetUserUseCase
}

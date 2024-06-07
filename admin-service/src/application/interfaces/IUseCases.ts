import { IGetUserUseCase } from "@/domain/useCases/IgetUserUseCase";


export interface IUseCases {
  getUsersUseCase:(dependencies: any)=>IGetUserUseCase
}

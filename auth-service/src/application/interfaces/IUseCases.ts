import {IRegisterUserUseCase,ILoginUserUseCase} from "@/domain/useCases"; 
import { IFindUserByEmailUseCase } from "@/domain/useCases/IFindUserByEmailUseCase";
import { IDependencies } from "./IDependencies";
import { ICreateOTP } from "@/domain/useCases/ICreateOTP";


export interface IUseCases {
    registerUserUseCase: (dependencies: IDependencies) => IRegisterUserUseCase;
    // loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
    findUserByEmailUseCase: (dependencies: IDependencies) => IFindUserByEmailUseCase;
    createOTP:(dependencies:IDependencies)=>ICreateOTP;
}

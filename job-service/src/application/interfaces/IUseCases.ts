import { ICreateJobUseCase, IGetJobDetailsUseCase, IGetJobsUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createJobUseCase: (dependencies: IDependencies) => ICreateJobUseCase;
    getJobsUseCase:(dependencies:IDependencies)=>IGetJobsUseCase;
    getJobDetailsUseCase:(dependencies:IDependencies)=>IGetJobDetailsUseCase;
}

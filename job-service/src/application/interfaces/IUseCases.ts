import { ICreateJobUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createJobUseCase: (dependencies: IDependencies) => ICreateJobUseCase;
}

import { IAapplyRecruiterUseCase, IFindUserByEmailUseCase, IFindUserByIdUseCase, IUpdateAboutUseCase, IUpdateAvatarUseCase, IUpdateBioUseCase } from "@/domain/useCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  applyRecruiterUseCase: (dependencies: any) => IAapplyRecruiterUseCase;
  updateAvatarUseCase:(dependencies:IDependencies)=>IUpdateAvatarUseCase;
  updateBioUseCase:(dependencies:IDependencies)=>IUpdateBioUseCase;
  updateAboutUseCase:(dependencies:IDependencies)=>IUpdateAboutUseCase;
}

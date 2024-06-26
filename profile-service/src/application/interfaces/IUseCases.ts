import { IAcceptRecruiterUseCase, IAddEducationUseCase, IAddExperienceUsecase, IAddPreferedJobsUseCase, IAddSkillsUseCase, IFindUserByEmailUseCase, IFindUserByIdUseCase, IIgnoreRecruiterUseCase, IRecruiterApplicationUseCase, IUpdateAboutUseCase, IUpdateAvatarUseCase, IUpdateBioUseCase } from "@/domain/useCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  recruiterApplicationUseCase: (dependencies: any) => IRecruiterApplicationUseCase;
  acceptRecruiterUseCase:(dependencies: any) => IAcceptRecruiterUseCase;
  ignoreRecruiterUseCase:(dependencies: any) => IIgnoreRecruiterUseCase;
  updateAvatarUseCase:(dependencies:IDependencies)=>IUpdateAvatarUseCase;
  updateBioUseCase:(dependencies:IDependencies)=>IUpdateBioUseCase;
  updateAboutUseCase:(dependencies:IDependencies)=>IUpdateAboutUseCase;
  addEducationUseCase:(dependencies:IDependencies)=>IAddEducationUseCase;
  addExperienceUsecase:(dependencies:IDependencies)=>IAddExperienceUsecase;
  addSkillsUseCase:(dependencies:IDependencies)=>IAddSkillsUseCase;
  addPreferedJobsUseCase:(dependencies:IDependencies)=>IAddPreferedJobsUseCase;
}

import { IAcceptRecruiterUseCase, IAddEducationUseCase, IAddExperienceUsecase, IAddPreferedJobsUseCase, IAddResumeToProfileUseCase, IAddSkillsUseCase, IChangeThemeUseCase, IDeleteResumeFromProfileUseCase, IFindUserByEmailUseCase, IFindUserByIdUseCase, IFollowUserUseCase, IGetDataForChartUseCase, IGetSearchedUserUseCase, IGetUserDetailsByUserIdUseCase, IGetUsersByArrayOfIdUseCase, IGetUserSuggestionsUseCase, IIgnoreRecruiterUseCase, IRecruiterApplicationUseCase, IUnFollowUserUseCase, IUpdateAboutUseCase, IUpdateAvatarUseCase, IUpdateBioUseCase } from "@/domain/useCase";
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
  getSearchedUserUseCase:(dependencies:IDependencies)=>IGetSearchedUserUseCase;
  followUserUseCase:(dependencies:IDependencies)=>IFollowUserUseCase;
  unfollowUserUseCase:(dependencies:IDependencies)=>IUnFollowUserUseCase;
  getUserDetailsByUserIdUseCase:(dependencies:IDependencies)=>IGetUserDetailsByUserIdUseCase;
  changeThemeUseCase:(dependencies:IDependencies)=>IChangeThemeUseCase;
  getUsersByArrayOfIdUseCase:(dependencies:IDependencies)=>IGetUsersByArrayOfIdUseCase;
  getDataForChartUseCase:(dependencies:IDependencies)=>IGetDataForChartUseCase;
  getUserSuggestionsUseCase:(dependencies:IDependencies)=>IGetUserSuggestionsUseCase;
  addResumeToProfileUseCase:(dependencies:IDependencies)=>IAddResumeToProfileUseCase;
  deleteResumeFromProfileUseCase:(dependencies:IDependencies)=>IDeleteResumeFromProfileUseCase;
  
}

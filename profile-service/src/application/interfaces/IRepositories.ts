import {
  Education,
  IUserProfile,
  UserShocaseDeatials,
  IGetUsersArrayOfId,
  ParamsForUserDataChart,
  AddResume,
  DeleteResume,
} from "@/domain/entities";
import { BioDetails } from "@/domain/entities/BioDetails";
import { Experience } from "@/domain/entities/Experience";
import {
  AcceptRequest,
  RecruiterApplication,
} from "@/domain/entities/RecruiterApplication";

export interface IRepositories {
  findById: (id?: string) => Promise<IUserProfile | null>;
  findByEmail: (email?: string) => Promise<IUserProfile | null>;
  recruiterApplication: (
    data: RecruiterApplication
  ) => Promise<IUserProfile | null>;
  acceptRecruiter: (data: AcceptRequest) => Promise<IUserProfile | null>;
  ignoreRecruiter: (data: AcceptRequest) => Promise<IUserProfile | null>;
  updateAvatar: (data: {
    avatar: string;
    email: string;
  }) => Promise<IUserProfile | null>;
  updateBio: (data: BioDetails) => Promise<IUserProfile | null>;
  updateAbout: (data: {
    email: string;
    about: string;
  }) => Promise<IUserProfile | null>;
  //education
  addEducation: (data: Education) => Promise<IUserProfile | null>;
  // editEducation:(data:Education)=>Promise<IUserProfile | null>
  // deleteEducation:(data:{userId:string,_id:string})=>Promise<IUserProfile | null>
  addExperience: (data: Experience) => Promise<IUserProfile | null>;
  addSkills: (data: {
    email?: string;
    skills?: string[];
  }) => Promise<IUserProfile | null>;
  addPreferedJobs: (data: {
    email?: string;
    preferedJobs?: string[];
  }) => Promise<IUserProfile | null>;

  getSearchedUser: (data: {
    searchKey: string;
  }) => Promise<IUserProfile[] | null>;
  followUser: (data: {
    myId: string;
    userId: string;
  }) => Promise<IUserProfile | null>;
  unfollowUser: (data: {
    myId: string;
    userId: string;
  }) => Promise<IUserProfile | null>;
  getUserDetailsByUserId: (id: string) => Promise<UserShocaseDeatials | null>;
  changeTheme: (data: {
    id: string;
    theme: string;
  }) => Promise<IUserProfile | null>;
  getUsersByArrayOfId: (data: IGetUsersArrayOfId) => Promise<any[] | null>;
  getDataForChart: (data: ParamsForUserDataChart) => Promise<any[] | null>;
  getUserSuggestions: (userId: string) => Promise<any[] | null>;
  addResumeToProfile: (data: AddResume) => Promise<IUserProfile | null>;
  deleteResumeFromProfile: (
    data: DeleteResume
  ) => Promise<IUserProfile | null | undefined>;
}

import { ObjectId } from "mongoose";
// import { RecruiterApplication } from "./RecruiterApplication";
export enum AccountType {
  personal = "personal",
  company = "company",
  recruiter = "recruiter",
}
export interface ICompnayAndRecruiter {
  company: IUserProfile;
  recruiter: IUserProfile;
}
export interface IUserProfile {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  accountType?: string | "recruiter" | "company" | "personal" | null;
  preferedJobs?: string[] | null;
  title?: string | null;
  bio: {
    about?: string | null;
    avatar?: string | null;
    dob?: Date | null;
    gender?: string | null;
    resume?: string | null;
    doc?: string | null;
    location?: string | null;
    phone?: string | null;
  };
  skills?: string[];
  following?: IUserProfile[];
  followers?: IUserProfile[];
  theme?: string | null;
  companyDetails?: {
    companyId?: ObjectId | null;
    companyName?: string;
    jobs?: ObjectId[] | null;
    recruiters?: Recruiters[] | null;
  };
  recruiterApplication?: RecruiterApplication[];
  education?: Education[];
  experience?: Experience[];
  isVerified?: boolean;
}
interface Education {
  _id?: ObjectId;
  nameOfinstitue?: string;
  course?: string;
  startYear?: string;
  endYear?: string;
}

interface Experience {
  _id?: ObjectId;
  nameOfinstitue?: string;
  position?: string;
  startYear?: string;
  endYear?: string;
}

interface RecruiterApplication {
  _id?: ObjectId;
  userId?: string | ObjectId;
  userEmail?: string;
  content?: string;
  name?: string;
  avatar?: string | null;
}
interface Recruiters {
  userId?: string | ObjectId;
  email?: string;
  name?: string;
  avatar?: string | null;
}
export interface UserShocaseDeatials {
  _id?: ObjectId;
  userId: ObjectId;
  avatar: string;
  accountType: string;
  isVerified: boolean;
  name: string;
  location: string;
  email: string;
}
export interface IGetUsersArrayOfId {
  user: string[];
}
export interface UserDataForChart {
  _id: { year: number; month: number; day?: number; hour?: number };
  count: number;
}
export interface ParamsForUserDataChart {
  range: string;
  startDate?: Date,
  endDate?: Date
}
export interface AddResume{
  name:string;
  userId:string;
  doc:string;
}
export interface DeleteResume{
  id:string;
  userId:string;

}
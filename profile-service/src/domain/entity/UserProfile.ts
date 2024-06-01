import { ObjectId } from "mongoose";
export enum AccountType {
    personal = "personal",
    company = "company",
    recruiter = "recruiter",
  }
export interface IUserProfile{
    _id?: ObjectId;
    email?: String;
    name?: String;
    userId?: ObjectId | String | null;
    accountType?: AccountType | null;
    preferedJobs?: String[] | null;
    title?: String | null;
    bio?: {
      about?: String | null;
      avatar?: String | null;
      dob?: Date | null;
      gender?: String | null;
      resume?: String | null;
      location?: String | null;
      phone?: String | null;
    };
    campanyId?: ObjectId | null;
    following?: ObjectId[] | null;
    followers?: ObjectId[] | null;
    theme?: String | null;
    companyDetails?: {
      jobs?: ObjectId[] | null;
      recruiters?: ObjectId[] | null;
    };
}
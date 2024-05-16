import { ObjectId } from "mongoose";

enum Role{
    admin="admin",
    user="user"
}
export enum AccountType{
    personal="personal",
    company="company",
    recruiter="recruiter"
}

export interface UserEntity{
    _id?:ObjectId;
    email:string;
    password?:string;
    name?:string;
    isBlocked:boolean;
    numberOfReportActions?:number;
    location?:string;
    dob?:Date;
    phone?:string;
    isVerified?:boolean;
    isRecruiter?:boolean;
    role:Role;
    isEmailVerified?:boolean;
    accountType?:AccountType;
    createdAt?:Date;
    updatedAt?:Date
    isGoogle?:boolean;
    isDetailsComplete:boolean
}
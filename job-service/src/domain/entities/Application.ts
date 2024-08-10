import { ObjectId } from "mongoose";

export interface IApplication{
    userId: ObjectId;
    jobId: ObjectId;
    resume: string;
    name:string;
    phone:string;
    email:string;
    coverLetter: string;
    status: string;
}
export interface ApplicationParams{
    userId: string;
    jobId: string;
    resume: string;
    name:string;
    phone:string;
    email:string;
    coverLetter: string;
}
export interface GetApplicationParams{
    userId: string;
    jobId: string;
    status:string;
}
export interface GetMyApplicationParams{
    userId: string;
    status:string;
}
export interface UpdateStatus{
    userId: string;
    applicationId:string;
    jobId: string;
    status:string;
}
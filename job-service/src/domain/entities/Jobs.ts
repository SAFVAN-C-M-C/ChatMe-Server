import { ObjectId, Schema } from "mongoose";

export interface IJobs {
  _id: ObjectId;
  jobTitle?: string;
  companyId?: ObjectId;
  recruiterId?: ObjectId;
  description?: string;
  type?: string;
  location?: string;
  mode?: String;
  skills?: String[];
  email?: String;
}
export interface ICreateJob {
  jobTitle: string;
  companyId: string;
  recruiterId?: string;
  description: string;
  type?: string;
  location?: string;
  mode?: string;
  skills?: string[];
  email?: string;
}
export interface IEditJob {
  jobTitle?: string;
  description?: string;
  type?: string;
  location?: string;
  mode?: string;
  skills?: string[];
  email?: string;
  jobId:string;
  userId:string;
}
export interface ParamsForJobDataChart {
  range: string;
  startDate?: Date,
  endDate?: Date
}
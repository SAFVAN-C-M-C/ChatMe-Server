import { ObjectId } from "mongoose";

export interface RecruiterApplication{
    companyEmail?:string
    userId?:string |ObjectId;
    userEmail?:string;
    content?:string;
    name?:string
  }
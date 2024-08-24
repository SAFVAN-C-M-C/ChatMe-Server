import { ObjectId } from "mongoose";

export interface IComapanyRequest {
  _id?: ObjectId;
  email?: string;
  name?: string;
}
export interface IRecruiterRequest {
  _id?: ObjectId;
  email?: string;
  name?: string;
  companyId?: ObjectId;
  companyName?: string;
}
export interface IGetComapanyRequest {
  totalPages: number;
  currentPage: number;
  data: IComapanyRequest[];
}
export interface IGetRecruiterRequest {
  totalPages: number;
  currentPage: number;
  data: IRecruiterRequest[];
}

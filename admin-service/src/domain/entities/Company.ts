import { ObjectId } from "mongoose";

export interface ICompany {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  numberOfReportActions?: Number | null;
  IsBlocked?: boolean | null;
  CreatedAt?: Date | null;
  isVerified?: boolean;
}
export interface IGetCompany {
  totalPages: number;
  currentPage: number;
  data: ICompany[];
}

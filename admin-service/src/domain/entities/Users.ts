import { ObjectId } from "mongoose";

export interface IUsers {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  numberOfReportActions?: Number | null;
  IsBlocked?: boolean | null;
  CreatedAt?: Date | null;
  isVerified?: boolean;
}
export interface IGetUser {
  totalPages: number;
  currentPage: number;
  data: IUsers[];
}

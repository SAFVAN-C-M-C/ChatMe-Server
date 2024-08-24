import { ObjectId } from "mongoose";

export interface ReportDetails {
  userId?: string;
  suspectId?: string;
  reason?: string;
  postId: string;
}
export interface IReports {
  _id: ObjectId;
  userId?: ObjectId;
  suspectId?: ObjectId;
  reason?: string;
  postId?: ObjectId;
}
export interface IGetReports {
  totalPages: number;
  currentPage: number;
  data: IReports[];
}

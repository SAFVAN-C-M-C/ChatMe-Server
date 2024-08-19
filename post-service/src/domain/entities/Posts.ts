import { ObjectId } from "mongoose";
export interface IPosts {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  media?: string;
  content?: string;
  userAvatar?: string;
  likes?: ObjectId[];
  tags?:string[]
  comments?: ObjectId[];
}

export interface CreatePostCredentials {
  email?: string;
  name?: string;
  userId?: string;
  media?: string;
  content?: string;
  tags?:string[]
  userAvatar?: string;
}
export interface EditPostCredentials {
  _id?: string;
  content?: string;
  tags?:string[]
}
export interface ILikePost {
  userId: string;
  postId: string;
}

export interface IGetPostForHome {
  limit: number;
  page: number;
}
export interface IGetPostForHomeResult {
  posts: IPosts[];
  total: number;
}
export interface ParamsForPostDataChart {
  range: string;
  startDate?: Date;
  endDate?: Date;
}

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
  comments?: IComments[];
}
export interface IComments {
  _id?: ObjectId;
  comment?: string;
  name?: string;
  userId?: string;
  likes?: ObjectId[];
}
export interface CreatePostCredentials {
  email?: string;
  name?: string;
  userId?: string;
  media?: string;
  content?: string;
  userAvatar?: string;
}
export interface EditPostCredentials {
  _id?: string;
  content?: string;
}
export interface ILikePost {
  userId: string;
  postId: string;
}

export interface AddCommentCredentials {
  userAvatar?: string;
  postId?: string;
  name?: string;
  comment?: string;
  userId?: string;
}
export interface DeleteComment {
  postId?: string;
  userId?: string;
  commentId?: string;
}
export interface IGetPostForHome{
  limit:number;
  page:number;
}
export interface IGetPostForHomeResult{
  posts:IPosts[];
  total:number
}
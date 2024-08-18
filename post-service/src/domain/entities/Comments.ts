import { ObjectId } from "mongoose";

export interface AddCommentCredentials {
  postId: string;
  comment: string;
  name: string;
  userAvatar: string;
  userId: string;
  replyId?: string;
}
export interface DeleteComment {
  userId?: string;
  commentId?: string;
}
export interface IComments {
  _id: ObjectId;
  postId: ObjectId;
  comment: string;
  name: string;
  userAvatar: string;
  userId: ObjectId;
  likes: ObjectId[];
  replyId?: ObjectId;
  replys: number;
}
export interface IGetComments {
  limit: number;
  page: number;
  postId: string;
}
export interface IGetCommentsReplys {
  limit: number;
  page: number;
  replyId:string;
}

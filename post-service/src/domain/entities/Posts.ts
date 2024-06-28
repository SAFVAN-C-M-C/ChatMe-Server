import { ObjectId } from "mongoose";
export interface IPosts {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  media?: string;
  content?: string;
  userAvatar?:string
  likes?: ObjectId[];
  comments?: IComments[];
}
export interface IComments {
  _id?: ObjectId;
  comment?: string;
  name?: string;
  email?: string;
  userId?: string;
  likes?: ObjectId[];
}
export interface CreatePostCredentials{
    email?: string;
    name?: string;
    userId?: string ;
    media?: string;
    content?: string;
    userAvatar?:string
}
export interface EditPostCredentials{
  _id?:string;
  content?: string;
}
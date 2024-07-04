import { ObjectId } from "mongoose";
import { IPosts } from "./Posts";

export interface ISavedPost  {
  _id?: ObjectId;
  userId?: ObjectId;
  saved: ObjectId[];
  savedPosts?:IPosts[]
}
export interface SavePostCredentials{
    userId?: string;
    postId?:string;
}
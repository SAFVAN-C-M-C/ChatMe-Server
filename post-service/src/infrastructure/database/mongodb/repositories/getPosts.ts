import { CreatePostCredentials, IGetPostForHome } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getPosts = async (data:IGetPostForHome) => {
  try {
const {limit,page}=data
    const skip = (page - 1) * limit;
    const posts = await Posts.find().sort({updatedAt:-1}).skip(skip).limit(limit);
    if (!posts) {
      throw new Error("Posts not found");
    }
    const total = await Posts.countDocuments();
    return {  posts,
      total};
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getPostsByUserId = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId not provided");
    }
    
    const posts = await Posts.find({userId:new Types.ObjectId(userId)}).sort({updatedAt:-1})
  
    
    if (!posts) {
      throw new Error("Posts not found");
    }
   
    return posts;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

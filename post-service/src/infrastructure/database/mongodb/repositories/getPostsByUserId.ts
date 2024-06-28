import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getPostsByUserId = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId not provided");
    }
    
    const posts = await Posts.find({userId:new Types.ObjectId(userId)})
    console.log("user postss:======",posts);
    
    if (!posts) {
      throw new Error("Posts not found");
    }
    console.log("post fetched",posts);
    return posts;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

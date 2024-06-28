import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getPosts = async () => {
  try {
    const posts = await Posts.find()
    if (!posts) {
      throw new Error("Posts not found");
    }
    console.log("post fetched",posts);
    return posts;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

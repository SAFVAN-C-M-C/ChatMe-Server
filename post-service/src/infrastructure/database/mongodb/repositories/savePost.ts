import { SavePostCredentials } from "@/domain/entities";
import { SavedPosts } from "../models";
import { Types } from "mongoose";

  
  export const savePost = async (data: SavePostCredentials) => {
    try {
      let { userId, postId } = data;
      if (!userId || !postId) {
        throw new Error("post not found");
      }
  
      const savedPost = await SavedPosts.findOneAndUpdate(
        { userId: new Types.ObjectId(userId) },
        { $addToSet: { saved: postId } }, // Use $addToSet to avoid duplicate postId entries
        { new: true, upsert: true } // Set upsert: true to create a new document if not found
      );
      if (!savedPost) {
        throw new Error("post not found");
      }
   
      return savedPost;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
  
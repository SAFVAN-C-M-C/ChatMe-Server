import { SavePostCredentials } from "@/domain/entities";
import { SavedPosts } from "../models";
import { Types } from "mongoose";

  
  export const unSavePost = async (data: SavePostCredentials) => {
    try {
      let { userId, postId } = data;
      if (!userId || !postId) {
        throw new Error("post not found");
      }
  
      const savedPost = await SavedPosts.findOneAndUpdate(
        { userId: new Types.ObjectId(userId) },
        { $pull: { saved: postId } }, // Use $pull to remove postId from the saved array
        { new: true }
      );
      if (!savedPost) {
        throw new Error("post not found");
      }

      return savedPost;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
  
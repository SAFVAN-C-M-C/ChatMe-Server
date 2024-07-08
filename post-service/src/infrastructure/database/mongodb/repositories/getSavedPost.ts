import { CreatePostCredentials } from "@/domain/entities";
import {  SavedPosts } from "../models";
import { Types } from "mongoose";

export const getSavedPost = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId not provided");
    }
    
    const savedPost = await SavedPosts.aggregate([
        // Match documents with the given userId
        { $match: { userId: new Types.ObjectId(userId) } },
        // Lookup to fetch the post for the saved postId
        {
          $lookup: {
            from: "posts", // Name of the collection to join with
            localField: "saved", // Field in SavedPosts collection (single string)
            foreignField: "_id", // Field in Posts collection
            as: "savedPost", // Output array field
          },
        },
        // Optionally project to reshape the output if needed
        {
          $project: {
            _id: 0, // Exclude _id field if not needed
            saved: 1, // Include the saved field (single postId)
            savedPost: 1, // Include fetched savedPost array
          },
        },
      ]);

    
    if (!savedPost) {
      throw new Error("Posts not found");
    }
    
    
    return savedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

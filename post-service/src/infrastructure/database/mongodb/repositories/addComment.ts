import { AddCommentCredentials, CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const addComment = async (data: AddCommentCredentials) => {
  try {
    let { comment,name, postId,userAvatar,userId } = data
    if (!postId) {
      throw new Error("post not found");
    }
    console.log(data);
    
    if(!comment || !name || !userAvatar ||!userId){
        throw new Error("details not given");
    }
    const newComment = {
        _id: new Types.ObjectId(), // Generate a new ObjectId for the comment
        comment:comment,
        name:name,
        userAvatar:userAvatar,
        userId:userId,
        like:[]
      };
      const updatedPost = await Posts.findOneAndUpdate(
        { _id: new Types.ObjectId(postId) },
        { $push: { comments: newComment } },
        { new: true } // Return the updated document
      );
    if (!updatedPost) {
      throw new Error("post not found");
    }

    return {post:updatedPost,id:String(newComment._id)};
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

import { AddCommentCredentials } from "@/domain/entities";
import { Comments, Posts } from "../models";
import { Types } from "mongoose";

export const addComment = async (data: AddCommentCredentials) => {
  try {
    let {postId} = data
    const existingPost=await Posts.findOne({_id:new Types.ObjectId(postId)});
    if(!existingPost){
      throw new Error("post not found");
    }
    const newComment=await Comments.create(data);
    if(!newComment){
      throw new Error("Failed to create new Comment");
    }
    existingPost.comments?.push(newComment._id);
    if(newComment.replyId){
      const existingComment=await Comments.findOne({_id:new Types.ObjectId(String(newComment.replyId))})
      if(!existingComment){
        throw new Error("Failed to find Reply comment");
      }
      existingComment.replys++
      await existingComment.save()
    }
    await existingPost.save()
    
    return {newComment,recipientId:String(existingPost.userId)}
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

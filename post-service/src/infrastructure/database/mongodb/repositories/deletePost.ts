import { CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const deletePost = async (data: {
  _id: string;
  isAdmin?: boolean;
  userId: string;
}) => {
  try {
    console.log(data, "deleteData");

    if (!data._id) {
      throw new Error("post not found");
    }
    const filter =
      data.isAdmin === true
        ? {
            _id: new Types.ObjectId(String(data._id)),
          }
        : {
            _id: new Types.ObjectId(String(data._id)),
            userId: new Types.ObjectId(String(data.userId)),
          };
    console.log(filter);

    const deltedPost = await Posts.findOneAndDelete(filter);

    return deltedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

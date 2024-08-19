import { Schema, Document, model, ObjectId } from "mongoose";

interface IPosts extends Document {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  media?: string;
  content?: string;
  likes?: ObjectId[];
  tags?:string[]
  comments?: ObjectId[];
}

const postSchema = new Schema(
  {
    email: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
    },
    userAvatar: {
      type: String,
    },
    name: {
      type: String,
    },
    tags: [{ type: String }],
    media: { type: String },
    content: { type: String },
    likes: [{ type: Schema.Types.ObjectId }],
    comments: [{type: Schema.Types.ObjectId,ref:"comments"}],
  },
  { timestamps: true }
);

export const Posts = model<IPosts>("posts", postSchema);

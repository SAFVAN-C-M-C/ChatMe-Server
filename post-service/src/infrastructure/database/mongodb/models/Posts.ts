import { Schema, Document, model, ObjectId } from "mongoose";

interface IPosts extends Document {
  _id?: ObjectId;
  email?: string;
  name?: string;
  userId?: ObjectId;
  media?:string;
  content?:string;
  likes?:ObjectId[];
  comments?:IComments[]
}



interface IComments {
  _id?: ObjectId;
  comment?: string;
  name?: string;
  email?: string;
  userId?: string;
  likes?: ObjectId[];
}



const commentSchema = new Schema({
  comment: { type: String },
  name: { type: String },
  email: { type: String },
  userId: { type: String },
  like:[{type: Schema.Types.ObjectId}]
});

const Commnts = model<IComments>("comments", commentSchema);





const postSchema = new Schema(
  {
    email: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
    },
    userAvatar:{
      type: String,
    },
    name: {
      type: String,
    },
    media:{type:String},
    content: { type: String },
    likes: [{ type: Schema.Types.ObjectId }],
    comments: [commentSchema],
  },
  { timestamps: true }
);

export const Posts = model<IPosts>("posts", postSchema);

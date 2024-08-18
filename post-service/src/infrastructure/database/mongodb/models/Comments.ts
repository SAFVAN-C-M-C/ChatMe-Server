import { Schema, Document, model, ObjectId } from "mongoose";

interface IComments extends Document {
  _id: ObjectId;
  postId:ObjectId
  comment: string;
  name: string;
  userAvatar: string;
  userId: ObjectId;
  likes: ObjectId[];
  replyId?: ObjectId;
  replys: number;
}
const commentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId },
    comment: { type: String },
    name: { type: String },
    userId: { type: Schema.Types.ObjectId },
    userAvatar: { type: String },
    like: [{ type: Schema.Types.ObjectId,default:[] }],
    replyId: { type: Schema.Types.ObjectId },
    replys: { type: Number,default:0 },
  },
  { timestamps: true }
);

export const Comments = model<IComments>("comments", commentSchema);

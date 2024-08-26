import { Document, ObjectId, Schema, model } from "mongoose";

interface IChat extends Document {
  _id: ObjectId;
  participants: ObjectId[];
  messages: ObjectId[];
}

const chatSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        default: [],
        ref: "message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Chat = model<IChat>("chat", chatSchema);

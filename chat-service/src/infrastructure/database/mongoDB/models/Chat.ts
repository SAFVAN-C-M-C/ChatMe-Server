import { ObjectId } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface IChat extends Document {
  _id: ObjectId;
  participants: ObjectId[];
  type: string;
  lastSeen: LastSeen[];
  messages:ObjectId[];
}
interface LastSeen {
  participant: ObjectId;
  seenAt: Date;
}
const chatSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],
    type: {
      type: String,
      enum: ["individual"],
      default: "individual",
    },
    lastSeen: [
      {
        participant: { type: Schema.Types.ObjectId },
        seenAt: { type: Date, default: Date.now },
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Chat = model<IChat>("chat", chatSchema);

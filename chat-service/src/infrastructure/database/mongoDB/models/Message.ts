import { ObjectId, Schema, model, Document } from "mongoose";

interface IMessage extends Document {
  _id: ObjectId;
  senderId: ObjectId;
  receiverId: ObjectId;
  message: string;
  type:string;
  media?:string
  recieverSeen?: boolean;
}

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default:"text"
    },
    media: {
      type: String,
    },
    recieverSeen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = model<IMessage>("message", messageSchema);

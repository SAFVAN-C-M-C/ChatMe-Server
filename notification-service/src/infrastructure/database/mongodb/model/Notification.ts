import { Document, model, ObjectId, Schema } from "mongoose";

interface INotification extends Document{
    _id:ObjectId;
    recipientId?:ObjectId;
    content?:string;
    isAdminMessage:boolean;
    postId?:ObjectId;
    title?:string;
    fromUserId?:ObjectId;
    type:string;
    read:boolean;
}
const notificationSchema = new Schema(
  {
    recipientId: {
      type: Schema.Types.ObjectId,
    },
    content: {
      type: String,
    },
    title:{
      type: String,
    },
    isAdminMessage:{
        type:Boolean,
        default:false
    },
    postId:{
        type: Schema.Types.ObjectId,
    },
    fromUserId:{
        type: Schema.Types.ObjectId,
    },
    type: {
      type: String,
      enum: ["like", "comment", "follow","admin"],
      default: "admin",
    },
    isSystem:{
      type: Boolean,
      default: false,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Notification = model<INotification>("notification", notificationSchema);

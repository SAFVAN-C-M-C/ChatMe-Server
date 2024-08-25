import { ObjectId } from "mongoose";

export interface IChat {
  _id: ObjectId;
  participants: ObjectId[];
  messages: IMessage[];
}
export interface IMessage {
  _id: ObjectId;
  senderId?: ObjectId;
  receiverId?: ObjectId;
  recieverSeen?: boolean;
  type: string | "text" | "image" | "video";
  media?: string;
  message: string;
}
interface LastSeen {
  participant?: ObjectId;
  seenAt?: Date;
}

export interface CreateChat {
  senderId: string;
  receiverId: string;
}
export interface GetChatByUserId {
  senderId: string;
  receiverId: string;
}

export interface CreateMessageData {
  chatId: string;
  senderId: string;
  receiverId: string;
  message?: string;
  media?: string;
  type?: string;
}

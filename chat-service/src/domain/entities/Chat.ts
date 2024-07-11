import { ObjectId } from "mongoose";

export interface IChat {
    _id: ObjectId;
    participants: ObjectId[];
    messages?:IMessage[];
  }
  interface IMessage{
    _id?:ObjectId;
    senderId?:ObjectId;
    receiverId?:ObjectId;
    recieverSeen?:boolean;
    message:string
  }
  interface LastSeen {
    participant?: ObjectId;
    seenAt?: Date;
  }

  export interface CreateChat{
    senderId:string;
    receiverId:string;
  }
  export interface GetChatByUserId{
    senderId:string;
    receiverId:string;
  }
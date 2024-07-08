import { ObjectId } from "mongoose";

export interface IChat {
    _id?: ObjectId;
    participants?: ObjectId[];
    type?: string;
    lastSeen?: LastSeen[];
    messages?:ObjectId[];
  }
  interface LastSeen {
    participant?: ObjectId;
    seenAt?: Date;
  }
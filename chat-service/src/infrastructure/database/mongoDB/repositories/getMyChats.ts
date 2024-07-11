import { GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat } from "../models";

export const getMyChats:(id:string)=>Promise<IChat[] | null> = async (id) => {
  try {
    
    if (!id ) {
      console.error("id not provided");

      throw new Error("Something went wrong");
    }

    const chats = await Chat.find({
        participants: new Types.ObjectId(String(id)),
      });

    return chats as IChat[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

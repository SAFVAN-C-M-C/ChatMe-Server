import { GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat } from "../models";

export const getChatByChatId = async (id: string) => {
  try {
    if (!id) {
      console.error("id not provided");

      throw new Error("Something went wrong");
    }

    const result = await Chat.findOne({
      _id: new Types.ObjectId(id),
    });

    return result as IChat;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

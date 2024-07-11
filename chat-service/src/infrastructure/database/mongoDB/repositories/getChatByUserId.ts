import { GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat } from "../models";

export const getChatByUserId = async (data: GetChatByUserId) => {
  try {
    let { senderId, receiverId } = data;
    if (!senderId || !receiverId) {
      console.error("receiverId, senderId not provided");

      throw new Error("Something went wrong");
    }

    const result = await Chat.findOne({
        participants: {
          $all: [new Types.ObjectId(senderId), new Types.ObjectId(receiverId)],
        },
      });

    return result as IChat;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

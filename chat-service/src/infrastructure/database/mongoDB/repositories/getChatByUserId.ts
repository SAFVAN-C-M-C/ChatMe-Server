import { GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat } from "../models";

export const getChatByUserId = async (data: GetChatByUserId) => {
    try {
        const { senderId, receiverId } = data;
        if (!senderId || !receiverId) {
            console.error("SenderId or ReceiverId not provided");
            throw new Error("Invalid senderId or receiverId provided");
        }

        const result = await Chat.findOne({
            participants: {
                $all: [new Types.ObjectId(senderId), new Types.ObjectId(receiverId)],
            },
        }).populate('messages');



        return result as unknown as IChat; // Type assertion to IChat
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

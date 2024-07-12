import { GetChatByUserId, IChat } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat } from "../models";

export const getMyChats = async (id: string): Promise<IChat[] | null> => {
    try {
        if (!id) {
            console.error("ID not provided");
            throw new Error("Invalid ID provided");
        }

        const chats = await Chat.find({
            participants: new Types.ObjectId(id),
        })
        .populate('messages')
        .sort({ updatedAt: -1 });

        return chats as unknown as IChat[]; // Type assertion to IChat[]
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

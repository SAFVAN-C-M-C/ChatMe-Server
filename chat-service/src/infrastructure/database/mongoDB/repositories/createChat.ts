import { CreateChat, IChat, IMessage } from "@/domain/entities/Chat";
import { Chat, Message } from "../models";
import { Types } from "mongoose";

export const createChat = async (data: CreateChat) => {
    try {
        const { senderId, receiverId } = data;
        if (!senderId || !receiverId) {
            console.log("SenderId or ReceiverId not found", senderId, receiverId);
            throw new Error("Something went wrong. Please try again.");
        }

        const saveData = {
            participants: [new Types.ObjectId(senderId), new Types.ObjectId(receiverId)],
            messages: [] // Initialize messages as an empty array
        };

        const newChat = await Chat.create(saveData);

        // Populate messages in the created chat
        const populatedChat = await Chat.findById(newChat._id).populate({
            path: 'messages',
            model: Message
        }).exec();

        if (!populatedChat) {
            throw new Error("Failed to create chat");
        }

        // Transform the populatedChat to match the IChat interface
        const transformedChat: IChat = {
            _id: populatedChat._id,
            participants: populatedChat.participants,
            messages: populatedChat.messages as unknown as IMessage[] // Explicitly cast the populated messages
        };

        return transformedChat;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

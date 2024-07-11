import { CreateChat, CreateMessageData, IChat, IMessage } from "@/domain/entities/Chat";
import { Chat, Message } from "../models";
import { Types } from "mongoose";


export const createMessage = async (data: CreateMessageData) => {
    try {
        const { senderId, receiverId, message, chatId } = data;
        if (!senderId || !receiverId || !message || !chatId) {
            console.log("SenderId, ReceiverId, message, or chatId not found", senderId, receiverId, message, chatId);
            throw new Error("Something went wrong. Please try again.");
        }

        const chat = await Chat.findById(new Types.ObjectId(chatId));

        if (!chat) {
            throw new Error("Can't find Chat");
        }

        const newMessage = new Message({
            senderId: new Types.ObjectId(senderId),
            receiverId: new Types.ObjectId(receiverId),
            message: message,
            recieverSeen: false
        });

        chat.messages.push(newMessage._id);
        await Promise.all([newMessage.save(), chat.save()]);

        return newMessage as IMessage;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

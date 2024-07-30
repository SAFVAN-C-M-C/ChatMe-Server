import { CreateChat, CreateMessageData, IChat, IMessage } from "@/domain/entities/Chat";
import { Chat, Message } from "../models";
import { Types } from "mongoose";


export const createMessage = async (data: CreateMessageData) => {
    try {
        const { senderId, receiverId, message,media,type, chatId } = data;
        if (!senderId || !receiverId || !chatId) {
            console.log("SenderId, ReceiverId, or chatId not found", senderId, receiverId, message, chatId);
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
            media:media,
            type:type?type:"text",
            recieverSeen: false
        });

        chat.messages.push(newMessage._id);
        await Promise.all([newMessage.save(), chat.save()]);

        return newMessage as IMessage;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

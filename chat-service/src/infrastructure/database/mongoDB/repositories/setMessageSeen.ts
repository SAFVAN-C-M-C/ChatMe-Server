import {  IChat, IMessage } from "@/domain/entities/Chat";
import { Types } from "mongoose";
import { Chat, Message } from "../models";

export const setMessageSeen = async (id: string): Promise<IMessage | null> => {
    try {
        if (!id) {
            console.error("ID not provided");
            throw new Error("Invalid ID provided");
        }

        const message = await Message.findOne({_id:new Types.ObjectId(String(id))})
        if(!message){
            console.log("No message found");
            throw new Error("No message found")
        }
        message.recieverSeen=true
        await message.save()
        return message as unknown as IMessage; // Type assertion to IChat[]
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

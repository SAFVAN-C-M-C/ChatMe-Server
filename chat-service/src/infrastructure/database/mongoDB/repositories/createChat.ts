import { CreateChat, IChat } from "@/domain/entities/Chat";
import { Chat } from "../models";
import { Types } from "mongoose";


export const createChat = async (data: CreateChat) => {
    try {
        const {senderId,receiverId}=data;
        if(!senderId || !receiverId){
            console.log("Senderid or reciver id not found",senderId,receiverId);
            throw new Error("Something went wrong Please try again")
        }
        let saveData={
            participants:[new Types.ObjectId(senderId) ,new Types.ObjectId(receiverId) ]
        }
        const newChat =await Chat.create(saveData)
        return newChat as IChat;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

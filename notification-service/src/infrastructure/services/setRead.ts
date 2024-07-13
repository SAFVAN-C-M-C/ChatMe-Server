import { INotification } from "@/domain/entity";
import { Notification } from "../database/mongodb/model";
import { Types } from "mongoose";

export const setRead = async (id: string): Promise<INotification | null> => {
    try {
        if (!id) {
            console.error("ID not provided");
            throw new Error("Invalid ID provided");
        }

        const notification = await Notification.findOne({_id:new Types.ObjectId(String(id))})
        if(!notification){
            console.log("No message found");
            throw new Error("No message found")
        }
        notification.read=true
        await notification.save()
        return notification as unknown as INotification; // Type assertion to IChat[]
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

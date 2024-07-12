import { CreateFollowNotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const createFollowNotification = async (data: CreateFollowNotification) => {
    try {

        const {fromUserId,recipientId}=data
        const dataToCreate={
            fromUserId:new Types.ObjectId(String(fromUserId)),
            recipientId:new Types.ObjectId(String(recipientId)),
            type:"follow",
        }
        console.log("Data to be inserted:", dataToCreate);

        const notification = await Notification.create(dataToCreate);
        console.log("New notification:", notification);
        return notification;
    } catch (error: any) {
        console.error("Error during user profile insertion:", error);
    }
};
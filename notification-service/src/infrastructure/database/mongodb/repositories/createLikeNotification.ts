import { CreateLikeNotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const createLikeNotification = async (data: CreateLikeNotification) => {
    try {

        const {fromUserId,recipientId,postId}=data
        const dataToCreate={
            fromUserId:new Types.ObjectId(String(fromUserId)),
            recipientId:new Types.ObjectId(String(recipientId)),
            type:"like",
            postId:new Types.ObjectId(String(postId))
        }
        console.log("Data to be inserted:", dataToCreate);

        const notification = await Notification.create(dataToCreate);
        console.log("New notification:", notification);
        return notification;
    } catch (error: any) {
        console.error("Error during user profile insertion:", error);
    }
};
import { CreateCommentNotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const createCommentNotification = async (data: CreateCommentNotification) => {
    try {

        const {fromUserId,recipientId,content,postId}=data
        const dataToCreate={
            fromUserId:new Types.ObjectId(String(fromUserId)),
            recipientId:new Types.ObjectId(String(recipientId)),
            type:"comment",
            content:content,
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
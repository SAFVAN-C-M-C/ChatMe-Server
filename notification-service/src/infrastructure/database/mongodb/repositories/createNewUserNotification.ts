import {  CreateNewUserNotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const createNewUserNotification = async (data: CreateNewUserNotification) => {
    try {

        const {recipientId,content}=data
        const dataToCreate={
            recipientId:new Types.ObjectId(String(recipientId)),
            content:content || "Welcome to ChatMe",
        }
        console.log("Data to be inserted:", dataToCreate);

        const notification = await Notification.create(dataToCreate);
        console.log("New notification:", notification);
        return notification;
    } catch (error: any) {
        console.error("Error during user profile insertion:", error);
    }
};
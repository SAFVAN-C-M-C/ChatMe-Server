import {  CreateFollowNotification } from "@/domain/entity";
import { createFollowNotification } from "../database/mongodb/repositories";
import { getReceiverSocketId, io } from "../socket";

export const createFollowNotificationService = async (data: CreateFollowNotification) => {
  try {
    const newNotification = await createFollowNotification(data);
    console.log(newNotification, "======new Notification=====");
    const recieverId= getReceiverSocketId(String(newNotification?.recipientId))
    if(recieverId){
      io.to(recieverId).emit("newNotification",newNotification)
    }
  } catch (error: any) {
    console.log(error);
  }
};

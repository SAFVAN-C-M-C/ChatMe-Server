import { CreateCommentNotification } from "@/domain/entity";
import { createCommentNotification } from "../database/mongodb/repositories";
import { getReceiverSocketId, io } from "../socket";

export const createCommentNotificationService = async (data: CreateCommentNotification) => {
  try {
    const newNotification = await createCommentNotification(data);
    console.log(newNotification, "======new Notification=====");
    const recieverId= getReceiverSocketId(String(newNotification?.recipientId))
    if(recieverId){
      io.to(recieverId).emit("newNotification",newNotification)
    }
  } catch (error: any) {
    console.log(error);
  }
};

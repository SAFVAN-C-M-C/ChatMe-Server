import { CreateLikeNotification } from "@/domain/entity";
import { createLikeNotification } from "../database/mongodb/repositories";
import { getReceiverSocketId, io } from "../socket";

export const createLikeNotificationService = async (data: CreateLikeNotification) => {
  try {
    const newNotification = await createLikeNotification(data);
    console.log(newNotification, "======new Notification=====");
    const recieverId= getReceiverSocketId(String(newNotification?.recipientId))
    if(recieverId){
      io.to(recieverId).emit("newNotification",newNotification)
    }
  } catch (error: any) {
    console.log(error);
  }
};

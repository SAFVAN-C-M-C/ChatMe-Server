import { CreateNewUserNotification } from "@/domain/entity";
import { createNewUserNotification } from "../database/mongodb/repositories";
import { getReceiverSocketId, io } from "../socket";

export const createNewUserNotificationService = async (data: CreateNewUserNotification) => {
  try {
    const newNotification = await createNewUserNotification(data);
    console.log(newNotification, "======new Notification=====");
    const recieverId= getReceiverSocketId(String(newNotification?.recipientId))
    if(recieverId){
      io.to(recieverId).emit("newNotification",newNotification)
    }
  } catch (error: any) {
    console.log(error);
  }
};

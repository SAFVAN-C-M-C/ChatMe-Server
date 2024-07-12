import {  CreateLikeNotification } from "@/domain/entity";
import { createLikeNotificationService } from "@/infrastructure/services";


export default async (data: CreateLikeNotification) => {
  try {
    await createLikeNotificationService(data);
    console.log("++++++");
    console.log("notification sended");
    console.log("++++++");
  } catch (error: any) {
    console.log(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};

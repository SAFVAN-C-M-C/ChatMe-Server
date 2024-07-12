import {  CreateCommentNotification } from "@/domain/entity";
import { createCommentNotificationService } from "@/infrastructure/services";


export default async (data: CreateCommentNotification) => {
  try {
    await createCommentNotificationService(data);
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

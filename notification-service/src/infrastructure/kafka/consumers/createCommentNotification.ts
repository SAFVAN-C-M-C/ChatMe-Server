import {  CreateCommentNotification } from "@/domain/entity";
import { createCommentNotificationService } from "@/infrastructure/services";


export default async (data: CreateCommentNotification) => {
  try {
    await createCommentNotificationService(data);

  } catch (error: any) {
    console.error(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};

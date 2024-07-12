import { IDependencies } from "@/application/interfaces/IDependencies";
import { sendVerificationMailController } from "./sendVerificationMail";
import { createNewNotificationController } from "./createNewNotification";
import { getNotificationsController } from "./getNotifications";

export const controllers = (dependencies: IDependencies) => {
    return {
        sendVerificationMail: sendVerificationMailController(dependencies),
        createNewNotification:createNewNotificationController(dependencies),
        getNotifications:getNotificationsController(dependencies),
    }
};
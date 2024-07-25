import { IDependencies } from "@/application/interfaces/IDependencies";
import { sendVerificationMailController } from "./sendVerificationMail";
import { createNewNotificationController } from "./createNewNotification";
import { getNotificationsController } from "./getNotifications";
import { getSystemNotificationsController } from "./getSystemNotifications";
import { deleteSystemNotificationController } from "./deleteSystemNotification";

export const controllers = (dependencies: IDependencies) => {
    return {
        sendVerificationMail: sendVerificationMailController(dependencies),
        createNewNotification:createNewNotificationController(dependencies),
        getNotifications:getNotificationsController(dependencies),
        getSystemNotifications:getSystemNotificationsController(dependencies),
        deleteSystemNotification:deleteSystemNotificationController(dependencies),
    }
};

import { INotification } from "@/domain/entity";
import { Notification } from "../model";


export const getSystemNotifications = async (): Promise<INotification[] | null> => {
    try {

        const notifications = await Notification.find({
            $and: [
                { isSystem: true },
                { isAdminMessage: true }
            ]
        });
        console.log("New notification:", notifications);
        if (!notifications) {
            return null;
        }
        return notifications as INotification[];
    } catch (error: any) {
        console.error("Error during notification retrieval:", error);
        return null;
    }
};

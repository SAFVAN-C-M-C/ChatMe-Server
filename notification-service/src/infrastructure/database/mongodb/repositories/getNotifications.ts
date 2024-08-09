import { CreateNewUserNotification, INotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const getNotifications = async (id: string): Promise<INotification[] | null> => {
    try {
        if (!id) {
            throw new Error("No id provided");
        }
        const notifications = await Notification.find({
            $or: [
                { recipientId: new Types.ObjectId(id) },
                { isAdminMessage: true }
            ]
        }).sort({createdAt:-1});
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

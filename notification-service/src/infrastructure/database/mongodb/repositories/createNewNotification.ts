import { CreatNewNotification, INotification } from "@/domain/entity";
import { Notification } from "../model";

export const createNewNotification = async (data: CreatNewNotification): Promise<INotification | null> => {
    try {
        const { content,title } = data;
        const dataToCreate = {
            isAdminMessage: true,
            content: content || "Welcome to ChatMe",
            title:title,
            isSystem:true
        };
        console.log("Data to be inserted:", dataToCreate);

        const notification = await Notification.create(dataToCreate);
        console.log("New notification:", notification);
        if (!notification) {
            throw new Error("Notification creation failed");
        }
        return notification as INotification;
    } catch (error: any) {
        console.error("Error during notification creation:", error);
        return null;
    }
};

import { CreateNewUserNotification, INotification } from "@/domain/entity";
import { Notification } from "../model";
import { Types } from "mongoose";

export const deleteSystemNotification = async (id: string): Promise<any | null> => {
    try {
        if (!id) {
            throw new Error("No id provided");
        }
        const deletedNotification = await Notification.findByIdAndDelete(id);
  
        if (!deletedNotification) {
          throw new Error("Notification not found");
        }

        return deletedNotification ;
    } catch (error: any) {
        console.error("Error during notification retrieval:", error);
        return null;
    }
};

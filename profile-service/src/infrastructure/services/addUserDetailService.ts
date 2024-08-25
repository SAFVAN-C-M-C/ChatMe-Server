import { Types } from "mongoose";
import { addUserDetails } from "../database/mongodb/repositories/addUserDetails";
import { IUserProfile } from "@/domain/entities";
import { createNewUserNotification } from "../kafka/producers";
export interface UserDetails {
  userId?: Types.ObjectId | string;
  email: string;
  name: string;
  location: string;
  phone: string;
  accountType: string;
  doc?: string;
}
export const addUserDetailService = async (data: IUserProfile) => {
  try {
    const userData = await addUserDetails(data);
    const notificationData = {
      recipientId: String(userData?.userId),
      content: `Hello there ${userData?.name}!!. Welcome To ChatMe`,
    };
    await createNewUserNotification(
      notificationData,
      "notification-service-topic"
    );
  } catch (error) {
    console.error(error);
  }
};

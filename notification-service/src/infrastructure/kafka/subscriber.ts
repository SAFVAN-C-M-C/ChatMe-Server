import {
  requestOTPConsumer,
  requestForgotPasswordConsumer,
  createCommentNotification,
  createFollowNotification,
  createLikeNotification,
  createNewUserNotification,
} from "./consumers";

interface IUserEvents {
  requestOTP(data: any): Promise<void>;
  requestForgotPassword(data: any): Promise<void>;
  createCommentNotification(data: any): Promise<void>;
  createFollowNotification(data: any): Promise<void>;
  createLikeNotification(data: any): Promise<void>;
  createNewUserNotification(data: any): Promise<void>;
}

export interface INotificationSubscriber
  extends Pick<
    IUserEvents,
    | "requestOTP"
    | "requestForgotPassword"
    | "createCommentNotification"
    | "createFollowNotification"
    | "createLikeNotification"
    | "createNewUserNotification"
  > {}

export const createSubscriber = (): INotificationSubscriber => {
  return {
    requestOTP: requestOTPConsumer,
    requestForgotPassword: requestForgotPasswordConsumer,
    createCommentNotification: createCommentNotification,
    createFollowNotification: createFollowNotification,
    createLikeNotification: createLikeNotification,
    createNewUserNotification: createNewUserNotification,
  };
};

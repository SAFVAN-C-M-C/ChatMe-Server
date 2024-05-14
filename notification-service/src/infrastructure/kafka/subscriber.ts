import {
    requestOTPConsumer,
    requestForgotPasswordConsumer
} from "./consumers";

interface IUserEvents {
    requestOTP(data: any): Promise<void>;
    requestForgotPassword(data:any):Promise<void>;
}

export interface INotificationSubscriber extends Pick<IUserEvents, 'requestOTP' | 'requestForgotPassword' > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        requestOTP: requestOTPConsumer,
        requestForgotPassword:requestForgotPasswordConsumer
    }
}

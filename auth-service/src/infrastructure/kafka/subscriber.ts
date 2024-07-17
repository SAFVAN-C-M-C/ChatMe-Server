import {
    sendVerificationMailConsumer,
    updateAccountTypeConsumer,
    updateBlockStatusConsumer,
  } from "./consumers";
  
  export interface ISubscriber {
    sendVerificationMail(data: any): Promise<void>;
    updateBlockStatus(data: any): Promise<void>;
    updateAccountType(data: any): Promise<void>;
  }
  
  export interface IAuthSubscriber
    extends Pick<ISubscriber, "sendVerificationMail" | "updateBlockStatus" | "updateAccountType"> {}
  
  export const createSubscriber = (): IAuthSubscriber => {
    return {
      sendVerificationMail: sendVerificationMailConsumer,
      updateBlockStatus: updateBlockStatusConsumer,
      updateAccountType:updateAccountTypeConsumer,
    };
  };
  
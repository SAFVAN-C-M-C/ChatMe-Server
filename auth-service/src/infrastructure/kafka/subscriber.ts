import {
    sendVerificationMailConsumer,
    updateBlockStatusConsumer,
  } from "./consumers";
  
  export interface ISubscriber {
    sendVerificationMail(data: any): Promise<void>;
    updateBlockStatus(data: any): Promise<void>;
  }
  
  export interface IAuthSubscriber
    extends Pick<ISubscriber, "sendVerificationMail" | "updateBlockStatus"> {}
  
  export const createSubscriber = (): IAuthSubscriber => {
    return {
      sendVerificationMail: sendVerificationMailConsumer,
      updateBlockStatus: updateBlockStatusConsumer,
    };
  };
  
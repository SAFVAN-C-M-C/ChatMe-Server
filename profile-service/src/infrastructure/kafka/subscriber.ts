import { addUserConsumer,addUserDetailsConsumer,updateVerificationService } from "./consumers";


  
  export interface ISubscriber {
    addUser(data: any): Promise<void>;
    addUserDetails(data:any):Promise<void>;
    updateVerification(data:any):Promise<void>;
  }
  
  export interface IProfileSubscriber
    extends Pick<ISubscriber,"addUser"| "addUserDetails" | "updateVerification"> {}
  
  export const createSubscriber = (): IProfileSubscriber => {
    return {
        addUser:addUserConsumer ,
        addUserDetails:addUserDetailsConsumer,
        updateVerification:updateVerificationService,
    };
  };
  
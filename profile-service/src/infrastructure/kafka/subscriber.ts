import { addUserConsumer,addUserDetailsConsumer } from "./consumers";


  
  export interface ISubscriber {
    addUser(data: any): Promise<void>;
    addUserDetails(data:any):Promise<void>
  }
  
  export interface IProfileSubscriber
    extends Pick<ISubscriber,"addUser"| "addUserDetails"> {}
  
  export const createSubscriber = (): IProfileSubscriber => {
    return {
        addUser:addUserConsumer ,
        addUserDetails:addUserDetailsConsumer,
    };
  };
  
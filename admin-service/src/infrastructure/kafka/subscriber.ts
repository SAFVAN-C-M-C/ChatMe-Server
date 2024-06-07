import { addUserConsumer } from "./consumers";


  
  export interface ISubscriber {
    addUser(data: any): Promise<void>;
  }
  
  export interface IAdminSubscriber
    extends Pick<ISubscriber,"addUser"> {}
  
  export const createSubscriber = (): IAdminSubscriber => {
    return {
        addUser:addUserConsumer 
    };
  };
  
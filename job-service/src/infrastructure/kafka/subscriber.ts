import {  } from "./consumers";


  
  export interface ISubscriber {
    [method: string]: (data: any) => Promise<void>;
  }
  
  export interface IJobSubscriber
    extends ISubscriber{}
  
  export const createSubscriber = (): IJobSubscriber => {
    return {
    };
  };
  
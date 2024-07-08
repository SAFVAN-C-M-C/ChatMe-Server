import {  } from "./consumers";


  
  export interface ISubscriber {
    [method: string]: (data: any) => Promise<void>;
  }
  
  export interface IPostSubscriber
    extends ISubscriber{}
  
  export const createSubscriber = (): IPostSubscriber => {
    return {
    };
  };
  
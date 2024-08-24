import { addUserConsumer, recruiterRequestConsumer } from "./consumers";

export interface ISubscriber {
  addUser(data: any): Promise<void>;
  recruiterRequest(data: any): Promise<void>;
}

export interface IAdminSubscriber
  extends Pick<ISubscriber, "addUser" | "recruiterRequest"> {}

export const createSubscriber = (): IAdminSubscriber => {
  return {
    addUser: addUserConsumer,
    recruiterRequest: recruiterRequestConsumer,
  };
};

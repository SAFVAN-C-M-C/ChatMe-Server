import {
  CreateChat,
  CreateMessageData,
  IChat,
  IMessage,
} from "../entities/Chat";

export interface ICreateMessageUseCase {
  execute(data: CreateMessageData): Promise<IMessage | null>;
}

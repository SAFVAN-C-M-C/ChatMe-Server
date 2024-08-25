import {
  CreateChat,
  CreateMessageData,
  GetChatByUserId,
  IChat,
  IMessage,
} from "@/domain/entities/Chat";

export interface IRepositories {
  createChat: (data: CreateChat) => Promise<IChat | null>;
  getChatByUserId: (data: GetChatByUserId) => Promise<IChat | null>;
  getChatByChatId: (id: string) => Promise<IChat | null>;
  getMyChats: (id: string) => Promise<IChat[] | null>;
  createMessage: (data: CreateMessageData) => Promise<IMessage | null>;
}

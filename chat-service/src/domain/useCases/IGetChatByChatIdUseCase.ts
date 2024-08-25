import { GetChatByUserId, IChat } from "../entities/Chat";

export interface IGetChatByChatIdUseCase {
  execute(id: string): Promise<IChat | null>;
}

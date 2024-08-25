import { CreateChat, IChat } from "../entities/Chat";

export interface ICreateChatUseCase {
  execute(data: CreateChat): Promise<IChat | null>;
}

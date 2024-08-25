import { GetChatByUserId, IChat } from "../entities/Chat";

export interface IGetChatByUserIdUseCase {
  execute(data: GetChatByUserId): Promise<IChat | null>;
}

import { IChat } from "../entities/Chat";

export interface IGetMyChatsUseCase {
  execute(id: string): Promise<IChat[] | null>;
}

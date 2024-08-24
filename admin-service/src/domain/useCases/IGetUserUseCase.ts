import { IGetUser } from "@/domain/entities";

export interface IGetUserUseCase {
  execute(page: number, limit: number): Promise<IGetUser | null>;
}

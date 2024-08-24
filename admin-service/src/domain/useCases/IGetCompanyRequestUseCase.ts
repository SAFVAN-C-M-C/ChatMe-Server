import { IGetComapanyRequest } from "../entities/Requests";

export interface IGetCompanyRequestUseCase {
  execute(page: number, limit: number): Promise<IGetComapanyRequest | null>;
}

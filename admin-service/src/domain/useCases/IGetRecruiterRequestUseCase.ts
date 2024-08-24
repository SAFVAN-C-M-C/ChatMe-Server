import { IGetRecruiterRequest } from "../entities/Requests";

export interface IGetRecruiterRequestUseCase {
  execute(page: number, limit: number): Promise<IGetRecruiterRequest | null>;
}

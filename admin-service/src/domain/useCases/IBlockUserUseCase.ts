import { ICompany, IUsers } from "@/domain/entities";

export interface IBlockUserUseCase {
  execute(data: {
    userId?: string;
    isBlocked?: boolean;
    type?: string;
  }): Promise<IUsers[] | ICompany[] | null>;
}

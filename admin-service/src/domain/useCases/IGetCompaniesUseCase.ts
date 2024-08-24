import { IGetCompany } from "@/domain/entities";

export interface IGetCompaniesUseCase {
  execute(page: number, limit: number): Promise<IGetCompany | null>;
}

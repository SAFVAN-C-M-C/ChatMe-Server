import { ICompany, IUsers } from "@/domain/entities";

export interface IGetCompaniesUseCase {
    execute(): Promise<ICompany[] | null>;
}
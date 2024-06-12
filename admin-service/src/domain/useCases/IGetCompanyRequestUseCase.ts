import { IUsers } from "@/domain/entities";
import { IComapanyRequest } from "../entities/Requests";

export interface IGetCompanyRequestUseCase {
    execute(): Promise<IComapanyRequest[] | null>;
}
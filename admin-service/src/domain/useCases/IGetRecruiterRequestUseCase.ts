import { IUsers } from "@/domain/entities";
import { IComapanyRequest, IRecruiterRequest } from "../entities/Requests";

export interface IGetRecruiterRequestUseCase {
    execute(): Promise<IRecruiterRequest[] | null>;
}
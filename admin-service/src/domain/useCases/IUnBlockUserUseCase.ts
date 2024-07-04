import { ICompany, IUsers } from "@/domain/entities";
import { IComapanyRequest, IRecruiterRequest } from "../entities/Requests";

export interface IUnBlockUserUseCase {
    execute(data:{userId?:string,isBlocked?:boolean,type?:string}): Promise<IUsers[] | ICompany[] | null>;
}
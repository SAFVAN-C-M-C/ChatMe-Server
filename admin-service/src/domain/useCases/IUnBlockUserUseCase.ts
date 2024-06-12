import { ICompany, IUsers } from "@/domain/entities";
import { IComapanyRequest, IRecruiterRequest } from "../entities/Requests";

export interface IUnBlockUserUseCase {
    execute(data:{email?:string,isBlocked?:boolean,type?:string}): Promise<IUsers[] | ICompany[] | null>;
}
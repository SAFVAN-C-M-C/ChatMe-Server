import { ICompany, IUsers } from "@/domain/entities";
import { IComapanyRequest, IRecruiterRequest } from "../entities/Requests";

export interface IBlockUserUseCase {
    execute(data:{email?:string,isBlocked?:boolean,type?:string}): Promise<IUsers[] | ICompany[] | null>;
}
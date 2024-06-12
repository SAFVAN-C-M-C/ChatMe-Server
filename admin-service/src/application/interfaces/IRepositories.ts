import { ICompany, IUsers } from "@/domain/entities";
import { IComapanyRequest, IRecruiterRequest } from "@/domain/entities/Requests";


export interface IRepositories {
  getUsers: () => Promise<IUsers[] | null>;
  getCompanies: () => Promise<ICompany[] | null>;
  getCompanyRequest:()=>Promise<IComapanyRequest[] | null>;
  getRecruiterRequest:()=>Promise<IRecruiterRequest[] | null>;
  verifyRequest:(data:{email?:string,isVerified?:boolean,type?:string})=>Promise<IRecruiterRequest[] | IComapanyRequest[] | null>;
  blockUser:(data:{email?:string,isBlocked?:boolean,type?:string})=>Promise<IUsers[] | ICompany[] | null>
  unBlockUser:(data:{email?:string,isBlocked?:boolean,type?:string})=>Promise<IUsers[] | ICompany[] | null>
}

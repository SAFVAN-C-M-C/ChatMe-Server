import { IComapanyRequest, ICompany, IRecruiterRequest, IReports, IUsers, ReportDetails } from "@/domain/entities";




export interface IRepositories {
  getUsers: () => Promise<IUsers[] | null>;
  getCompanies: () => Promise<ICompany[] | null>;
  getCompanyRequest:()=>Promise<IComapanyRequest[] | null>;
  getRecruiterRequest:()=>Promise<IRecruiterRequest[] | null>;
  verifyRequest:(data:{email?:string,isVerified?:boolean,type?:string})=>Promise<IRecruiterRequest[] | IComapanyRequest[] | null>;
  blockUser:(data:{userId?:string,isBlocked?:boolean,type?:string})=>Promise<IUsers[] | ICompany[] | null>
  unBlockUser:(data:{userId?:string,isBlocked?:boolean,type?:string})=>Promise<IUsers[] | ICompany[] | null>;
  addReport:(data:ReportDetails)=>Promise<IReports | null>;
  getReports:()=>Promise<IReports[] | null>;
  reportAction:(data:{userId:string,reportId:string})=>Promise<IReports[] | null>;
  deleteReport:(id:string)=>Promise<IReports[] | null>;
}

import {
  IComapanyRequest,
  ICompany,
  IGetComapanyRequest,
  IGetCompany,
  IGetRecruiterRequest,
  IGetReports,
  IGetUser,
  IRecruiterRequest,
  IReports,
  IUsers,
  ReportDetails,
} from "@/domain/entities";

export interface IRepositories {
  getUsers: (page: number, limit: number) => Promise<IGetUser | null>;
  getCompanies: (page: number, limit: number) => Promise<IGetCompany | null>;
  getCompanyRequest: (
    page: number,
    limit: number
  ) => Promise<IGetComapanyRequest | null>;
  getRecruiterRequest: (
    page: number,
    limit: number
  ) => Promise<IGetRecruiterRequest | null>;
  getReports: (page: number, limit: number) => Promise<IGetReports | null>;
  verifyRequest: (data: {
    email?: string;
    isVerified?: boolean;
    type?: string;
  }) => Promise<IRecruiterRequest[] | IComapanyRequest[] | null>;
  blockUser: (data: {
    userId?: string;
    isBlocked?: boolean;
    type?: string;
  }) => Promise<IUsers[] | ICompany[] | null>;
  unBlockUser: (data: {
    userId?: string;
    isBlocked?: boolean;
    type?: string;
  }) => Promise<IUsers[] | ICompany[] | null>;
  addReport: (data: ReportDetails) => Promise<IReports | null>;
  reportAction: (data: {
    userId: string;
    reportId: string;
  }) => Promise<IReports[] | null>;
  deleteReport: (id: string) => Promise<IReports[] | null>;
}

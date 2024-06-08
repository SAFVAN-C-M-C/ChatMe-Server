import { IUserProfile } from "@/domain/entities";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";

export interface IRepositories {
  findById: (id?: string) => Promise<IUserProfile | null>;
  findByEmail:(email?:string)=>Promise<IUserProfile | null>;
  recruiterApplication:(data:RecruiterApplication)=>Promise<IUserProfile | null>;
}

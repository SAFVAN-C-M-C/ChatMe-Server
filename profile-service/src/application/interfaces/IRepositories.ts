import { Education, IUserProfile } from "@/domain/entities";
import { BioDetails } from "@/domain/entities/BioDetails";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";

export interface IRepositories {
  findById: (id?: string) => Promise<IUserProfile | null>;
  findByEmail:(email?:string)=>Promise<IUserProfile | null>;
  recruiterApplication:(data:RecruiterApplication)=>Promise<IUserProfile | null>;
  updateAvatar:(data: { avatar: string; email: string })=>Promise<IUserProfile | null>;
  updateBio:(data:BioDetails)=>Promise<IUserProfile | null>;
  updateAbout:(data:{email:string,about:string})=>Promise<IUserProfile | null>;
  //education
  // addEducation:(data:Education)=>Promise<IUserProfile | null>
  // editEducation:(data:Education)=>Promise<IUserProfile | null>
  // deleteEducation:(data:{userId:string,_id:string})=>Promise<IUserProfile | null>

}

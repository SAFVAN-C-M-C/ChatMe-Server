import { IOtp, LoginCredential, UserEntity } from "@/domain/entities";


export interface IRepositories{
    create: (data: LoginCredential) => Promise<UserEntity | null>;
    findByEmail: (email: string) => Promise<UserEntity | null>;
    createOTP:(email:string)=> Promise<IOtp> | null;
    // findById: (id: string) => Promise<UserEntity | null>;
    // verifyOtp:(email:string,otp:string)=>Promise<Boolean | null>
    // updateUserPassword: (data: {email: string, password: string}) => Promise<UserEntity | null>;
}
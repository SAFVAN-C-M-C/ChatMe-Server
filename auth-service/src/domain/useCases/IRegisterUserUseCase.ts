import { UserEntity } from "@/domain/entities";

export interface IRegisterUserUseCase {
    execute(email: string,password?:string,google?:boolean): Promise<UserEntity | null>;
}
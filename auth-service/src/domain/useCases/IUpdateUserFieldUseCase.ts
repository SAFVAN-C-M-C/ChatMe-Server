import { UserEntity } from "@/domain/entities";

export interface IUpdateUserFieldUseCase {
    execute(email:string,feild: string,value?:boolean): Promise<UserEntity | null>;
}
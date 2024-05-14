import { UserEntity } from "@/domain/entities";

export interface IRegisterUserUseCase {
    execute(email: string,password:string): Promise<UserEntity | null>;
}
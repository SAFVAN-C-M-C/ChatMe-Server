import { UserEntity } from "@/domain/entities";

export interface IFindUserByEmailUseCase {
    execute(email?: string,google?:boolean): Promise<UserEntity | null>;
}
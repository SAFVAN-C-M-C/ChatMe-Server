import { IUserProfile } from "@/domain/entities";

export interface IFindUserByEmailUseCase {
    execute(email: string): Promise<IUserProfile | null>;
}
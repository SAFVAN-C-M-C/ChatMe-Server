import { IUserProfile } from "@/domain/entities";

export interface IFindUserByIdUseCase {
    execute(id: string): Promise<IUserProfile | null>;
}
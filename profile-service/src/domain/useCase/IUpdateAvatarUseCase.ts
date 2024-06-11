import { IUserProfile } from "@/domain/entities";

export interface IUpdateAvatarUseCase {
    execute(data: { avatar: string; email: string }): Promise<IUserProfile | null>;
}
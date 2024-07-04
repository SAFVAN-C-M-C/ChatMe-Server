import { IUserProfile } from "@/domain/entities";

export interface IUnFollowUserUseCase {
    execute(data:{myId:string,userId:string}): Promise<IUserProfile | null>;
}
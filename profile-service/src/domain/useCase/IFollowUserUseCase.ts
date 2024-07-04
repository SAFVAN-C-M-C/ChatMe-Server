import { IUserProfile } from "@/domain/entities";

export interface IFollowUserUseCase {
    execute(data:{myId:string,userId:string}): Promise<IUserProfile | null>;
}
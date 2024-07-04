import { CreatePostCredentials, ILikePost, IPosts } from "../entities";

export interface IUnLikePostUseCase {
    execute(data: ILikePost): Promise<IPosts | null>;
}
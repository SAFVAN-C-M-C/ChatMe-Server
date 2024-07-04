import { CreatePostCredentials, ILikePost, IPosts } from "../entities";

export interface ILikePostUseCase {
    execute(data: ILikePost): Promise<IPosts | null>;
}
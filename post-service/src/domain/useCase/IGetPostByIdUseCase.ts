import { CreatePostCredentials, IPosts } from "../entities";

export interface IGetPostByIdUseCase {
    execute(postId: string): Promise<IPosts | null>;
}
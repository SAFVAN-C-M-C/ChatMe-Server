import { CreatePostCredentials, IPosts } from "../entities";

export interface IGetPostsUseCase {
    execute(): Promise<IPosts[] | null>;
}
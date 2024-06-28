import { CreatePostCredentials, IPosts } from "../entities";

export interface IGetPostsByUserIdUseCase {
    execute(userId: string): Promise<IPosts[] | null>;
}
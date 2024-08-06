import { CreatePostCredentials, IGetPostForHome, IGetPostForHomeResult, IPosts } from "../entities";

export interface IGetPostsUseCase {
    execute(data:IGetPostForHome): Promise<IGetPostForHomeResult | null>;
}
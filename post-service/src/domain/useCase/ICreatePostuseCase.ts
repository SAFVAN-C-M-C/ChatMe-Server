import { CreatePostCredentials, IPosts } from "../entities";

export interface ICreatePostuseCase {
    execute(data: CreatePostCredentials): Promise<IPosts | null>;
}
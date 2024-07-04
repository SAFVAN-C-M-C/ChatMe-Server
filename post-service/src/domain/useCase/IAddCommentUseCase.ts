import { AddCommentCredentials, IPosts } from "../entities";

export interface IAddCommentUseCase {
    execute(data: AddCommentCredentials): Promise<{post:IPosts,id:string} | null>;
}
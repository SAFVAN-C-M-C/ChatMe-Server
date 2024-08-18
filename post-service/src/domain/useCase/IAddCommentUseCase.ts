import { AddCommentCredentials, IComments, IPosts } from "../entities";

export interface IAddCommentUseCase {
    execute(data: AddCommentCredentials): Promise<{newComment:IComments,recipientId:string} | null>;
}
import { DeleteComment, IPosts } from "../entities";


export interface IDeleteCommentUseCase {
    execute(data:DeleteComment): Promise<IPosts | null>;
}
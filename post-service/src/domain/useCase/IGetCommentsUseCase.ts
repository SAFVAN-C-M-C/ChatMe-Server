import { IComments, IGetComments } from "../entities";



export interface IGetCommentsUseCase {
    execute(data:IGetComments): Promise<{ comments:IComments[], total: number } | null>;
}
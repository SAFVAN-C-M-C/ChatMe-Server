import { IComments, IGetCommentsReplys } from "../entities";

export interface IGetCommentReplysUseCase {
  execute(
    data: IGetCommentsReplys
  ): Promise<{ comments:IComments[], total: number } | null>;
}

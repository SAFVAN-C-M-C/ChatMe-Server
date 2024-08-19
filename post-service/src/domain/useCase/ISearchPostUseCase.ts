import { IPosts } from "../entities";

export interface ISearchPostUseCase {
  execute(data: {searchKey: string;}): Promise<any[]|null>;
}

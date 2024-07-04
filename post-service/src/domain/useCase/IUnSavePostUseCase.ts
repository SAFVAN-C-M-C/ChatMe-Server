import { ISavedPost, SavePostCredentials } from "../entities";

export interface IUnSavePostUseCase {
  execute(data: SavePostCredentials): Promise<ISavedPost | null>;
}

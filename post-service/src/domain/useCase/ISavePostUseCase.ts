import { ISavedPost, SavePostCredentials } from "../entities";

export interface ISavePostUseCase {
  execute(data: SavePostCredentials): Promise<ISavedPost | null>;
}

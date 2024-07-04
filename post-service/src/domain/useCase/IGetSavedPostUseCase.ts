import { ISavedPost } from "../entities";

export interface IGetSavedPostUseCase {
    execute(userId: string): Promise<ISavedPost[] | null>;
}
import {  EditPostCredentials, IPosts } from "../entities";

export interface IEditPostUseCase {
    execute(data: EditPostCredentials): Promise<IPosts | null>;
}
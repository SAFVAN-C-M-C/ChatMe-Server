import {  EditPostCredentials, IPosts } from "../entities";

export interface IDeletePostUseCase {
    execute(_id:string): Promise<any | null>;
}
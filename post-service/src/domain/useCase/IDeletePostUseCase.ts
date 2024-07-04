import {  EditPostCredentials, IPosts } from "../entities";

export interface IDeletePostUseCase {
    execute(data:{_id:string,isAdmin?:boolean,userId:string}): Promise<any | null>;
}
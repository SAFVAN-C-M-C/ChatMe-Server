import { ICreatePostuseCase, IGetPostsByUserIdUseCase, IGetPostsUseCase } from "@/domain/useCase";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
    createPostuseCase:(dependencies:IDependencies)=>ICreatePostuseCase;
    getPostsByUserIdUseCase:(dependencies:IDependencies)=>IGetPostsByUserIdUseCase;
    getPostsUseCase:(dependencies:IDependencies)=>IGetPostsUseCase;
}

import { IAddCommentUseCase, ICreatePostuseCase, IDeletePostUseCase, IEditPostUseCase, IGetPostsByUserIdUseCase, IGetPostsUseCase, IGetSavedPostUseCase, ILikePostUseCase, ISavePostUseCase, IUnLikePostUseCase, IUnSavePostUseCase } from "@/domain/useCase";
import { IDependencies } from "./IDependencies";
import { IDeleteCommentUseCase } from "@/domain/useCase/IDeleteCommentUseCase";


export interface IUseCases {
    createPostuseCase:(dependencies:IDependencies)=>ICreatePostuseCase;
    getPostsByUserIdUseCase:(dependencies:IDependencies)=>IGetPostsByUserIdUseCase;
    getPostsUseCase:(dependencies:IDependencies)=>IGetPostsUseCase;
    editPostUseCase:(dependencies:IDependencies)=>IEditPostUseCase;
    deletePostUseCase:(dependencies:IDependencies)=>IDeletePostUseCase;
    likePostUseCase:(dependencies:IDependencies)=>ILikePostUseCase;
    unLikePostUseCase:(dependencies:IDependencies)=>IUnLikePostUseCase;
    savePostUseCase:(dependencies:IDependencies)=>ISavePostUseCase;
    unSavePostUseCase:(dependencies:IDependencies)=>IUnSavePostUseCase;
    getSavedPostUseCase:(dependencies:IDependencies)=>IGetSavedPostUseCase;
    addCommentUseCase:(dependencies:IDependencies)=>IAddCommentUseCase;
    deleteCommentUseCase:(dependencies:IDependencies)=>IDeleteCommentUseCase;
}

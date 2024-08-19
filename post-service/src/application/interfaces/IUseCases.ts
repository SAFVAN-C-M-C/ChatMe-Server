import { IAddCommentUseCase, ICreatePostuseCase, IDeletePostUseCase, IEditPostUseCase, IGetCommentReplysUseCase, IGetCommentsUseCase, IGetDataForChartUseCase, IGetPostByIdUseCase, IGetPostsByUserIdUseCase, IGetPostsUseCase, IGetSavedPostUseCase, ILikePostUseCase, ISavePostUseCase, ISearchPostUseCase, IUnLikePostUseCase, IUnSavePostUseCase } from "@/domain/useCase";
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
    getCommentsUseCase:(dependencies:IDependencies)=>IGetCommentsUseCase;
    getCommentReplysUseCase:(dependencies:IDependencies)=>IGetCommentReplysUseCase;
    deleteCommentUseCase:(dependencies:IDependencies)=>IDeleteCommentUseCase;
    getPostByIdUseCase:(dependencies:IDependencies)=>IGetPostByIdUseCase;
    getDataForChartUseCase:(dependencies:IDependencies)=>IGetDataForChartUseCase;
    searchPostUseCase:(dependencies:IDependencies)=>ISearchPostUseCase;
}

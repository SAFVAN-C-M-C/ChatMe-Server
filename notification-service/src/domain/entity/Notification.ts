import { ObjectId } from "mongoose";

export interface INotification{
    _id:ObjectId;
    recipientId?:ObjectId;
    content?:string
    title?:string
    isAdminMessage:boolean
    postId?:ObjectId
    fromUserId?:ObjectId
    type:string
    read:boolean
}

export interface CreateFollowNotification{
    recipientId:string;
    fromUserId:string
}
export interface CreateCommentNotification{
    recipientId:string;
    fromUserId:string;
    content:string;
    postId:string
}

export interface CreateLikeNotification{
    recipientId:string;
    fromUserId:string;
    postId:string
}
export interface CreateNewUserNotification{
    recipientId:string;
    content:string,
}
export interface CreatNewNotification{
    content:string;
    title:string
}
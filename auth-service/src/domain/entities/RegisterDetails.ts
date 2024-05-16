import { ObjectId } from "mongoose";
import { AccountType } from "./UserEntity";

export interface RegisterDetails{
    userId?:ObjectId | string,
    email?:string
    name:string;
    location:string;
    dob?:Date;
    phone:string;
    accountType:AccountType
}
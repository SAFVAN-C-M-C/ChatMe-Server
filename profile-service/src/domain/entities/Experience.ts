import { ObjectId } from "mongoose";

export interface Experience {
    userId?: string | ObjectId;
    email?:string
    experience:{
        _id?:string | ObjectId;
        nameOfinstitue?: string;
        position?: string;
        startYear?: string;
        endYear?: string;
    }
}
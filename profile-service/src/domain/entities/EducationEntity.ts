import { ObjectId } from "mongoose";

export interface Education {
    userId?: string | ObjectId;
    education:{
        _id?:string | ObjectId;
        nameOfinstitue?: string;
        course?: string;
        startYear?: string;
        endYear?: string;
    }
}
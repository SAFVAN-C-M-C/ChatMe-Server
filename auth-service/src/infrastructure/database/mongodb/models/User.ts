import { UserEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
    },
    name:{
        type:String
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    numberOfReportActions:{
        type:Number,
        default:0
    },
    location:{
        type:String
    },
    dob:{
        type:Date
    },
    phone:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    },isRecruiter:{
        type:Boolean,
        default:false
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default:"user"  
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    accountType:{
        type:String,
        enum:["personal","company","recruiter"],
        default:"personal"
    },
    isGoogle:{
        type:Boolean,
        default:false
    },
    isDetailsComplete:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true});


export const User = model<UserEntity>("users", userSchema);
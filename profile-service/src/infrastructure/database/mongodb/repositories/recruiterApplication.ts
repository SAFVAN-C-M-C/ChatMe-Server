import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IUserProfile } from "@/domain/entities";
import { Types } from "mongoose";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";


export const recruiterApplication = async (
    data:RecruiterApplication
): Promise<IUserProfile | null> => {
    try {
        
        const existingUser = await UserProfile.findOne({email:data.companyEmail});
        if (!existingUser) {
            throw new Error("User does not exist!");
        }
        const dataToPush={
            name:data.name,
            userEmail:data.userEmail,
            content:data.content,
            userId:data.userId
        }   
        existingUser.recruiterApplication?.push(dataToPush)
        return existingUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}
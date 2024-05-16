import {Otp} from "../models/OtpSchema"

export const verifyOtp = async (email: string, otp:string): Promise<boolean> => {
    try {
        console.log("in repo");
        
        const verified = await Otp.findOne({email:email,otp:otp}) 
        if(!verified) return false
        return true
    } catch (error) {
        console.log(error, "Something Went wrong")
        return false
    }
}

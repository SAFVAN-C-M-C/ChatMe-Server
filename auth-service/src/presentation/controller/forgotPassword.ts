import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import {ErrorResponse} from "@/_lib/common/error"
import { generateAccessToken, generateForgotPasswordToken } from "@/_lib/jwt";
import { requestForgotPassword } from "@/infrastructure/kafka/producer";
import {requestOTP} from "@/infrastructure/kafka/producer";


export const forgotPasswordController=(dependencies:IDependencies)=>{
const {useCases: {findUserByEmailUseCase}}=dependencies;
return async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const { email } = req.body;
        console.log("🚀 ~ file: forgotPassword.ts:9 ~ return ~ email:", email)
        if(!email){
           return next(ErrorResponse.unauthorized("Sorry We couldn't find any account.Please Check email"))
        }

        const existUser = await findUserByEmailUseCase(dependencies).execute(email)
        console.log("🚀 ~ file: forgotPassword.ts:16 ~ return ~ existUser:", existUser)

        if(!existUser){
            return next(ErrorResponse.unauthorized("Sorry We couldn't find any account.Please Check email"))
        }

         //produce message to notification
         await requestOTP( email,"notification-service-topic" );
         const accessToken = generateForgotPasswordToken({
            email:email,
            reset:false,
            otp:true,
          });
         res.cookie("access_token", accessToken, {
            httpOnly: true,
          });
        res.status(200).json({
            success: true,
            data: {email,reset:false,otp:true,otpType:"forgot"},
            message: "Mail produced!"
        });
        
    } catch (error:any) {
        res.status(401).json({
            success: false,
            message: "forgot password failed",
          });
    }
}
}
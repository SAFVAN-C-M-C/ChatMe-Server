import { hashPassword } from "@/_lib/bcrypt";
import { ErrorResponse } from "@/_lib/common/error";
import { verifyForgetPasswordToken } from "@/_lib/jwt";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updatePasswordController = (dependencies: IDependencies) => {
    const { useCases: { findUserByEmailUseCase, updateUserPasswordUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { password } = req.body;  
           
            if (!password) {
                return next(ErrorResponse.badRequest("Tpassword is required"));
            }

            const email=req.user?.email!

            console.log("🚀 ~ file: updatePassword.ts ~ email:", email);

            const userExist = await findUserByEmailUseCase(dependencies).execute(email);
            console.log("🚀 ~ file: updatePassword.ts ~ userExist:", userExist);

            if (!userExist) {
                return next(ErrorResponse.notFound("User not found"));
            }

            const hashNewPassword = await hashPassword(password);
            console.log("🚀 ~ file: updatePassword.ts ~ hashNewPassword:", hashNewPassword);

            const updatePassword = await updateUserPasswordUseCase(dependencies).execute({ email, password: hashNewPassword });
            console.log("🚀 ~ file: updatePassword.ts ~ updatePassword:", updatePassword);
            delete userExist.password
            if (updatePassword) {
                return res.status(200).json({
                    success: true,
                    data: userExist,
                    message: "Password updated successfully",
                });
            } else {
                return next(ErrorResponse.internalError("Failed to update password"));
            }
        } catch (error: any) {
            console.error("Error updating password:", error);
            return next(ErrorResponse.internalError("Error updating password"));
        }
    }
}

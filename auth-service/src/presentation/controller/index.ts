import { IDependencies } from "@/application/interfaces/IDependencies"
import { registerController } from "./register"

export const controllers = (dependencies: IDependencies) => {
    return{
        register: registerController(dependencies),
        // login: loginController(dependencies),
        // getUser: getUserController(dependencies),
        // logout: logoutController(dependencies),
        // googleAuth: googleAuthController(dependencies),
        // forgotPassword: forgotPasswordController(dependencies),
        // updatePassword: updatePasswordController(dependencies)
    }
}
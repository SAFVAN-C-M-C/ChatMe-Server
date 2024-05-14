import { IDependencies } from "@/application/interfaces/IDependencies"
import { registerController } from "./register"
import { loginController } from "./login"
import { addRegisterDetailsController } from "./addRegisterDetails"
import { logoutController } from "./logout"
import { googleAuthController } from "./googleAuth"
import { forgotPasswordController } from "./forgotPassword"
import { updatePasswordController } from "./updatePassword"

export const controllers = (dependencies: IDependencies) => {
    return{
        register: registerController(dependencies),
        login: loginController(dependencies),
        addRegisterDetails: addRegisterDetailsController(dependencies),
        logout: logoutController(dependencies),
        googleAuth: googleAuthController(dependencies),
        forgotPassword: forgotPasswordController(dependencies),
        updatePassword: updatePasswordController(dependencies)
    }
}
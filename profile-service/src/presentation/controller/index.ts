import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserProfileController } from "./getUserProfile"

export const controllers = (dependencies: IDependencies) => {
    return{
        getUserProfile:getUserProfileController(dependencies)
    }
}
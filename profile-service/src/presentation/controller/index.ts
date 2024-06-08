import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserProfileController } from "./getUserProfile"
import { applyRecruiterController } from "./applyRecruiter"

export const controllers = (dependencies: IDependencies) => {
    return{
        getUserProfile:getUserProfileController(dependencies),
        applyRecruiter:applyRecruiterController(dependencies)
    }
}
import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserController } from "./getUserController"

export const controllers = (dependencies: IDependencies) => {
    return{
        getUsers:getUserController
    }
}
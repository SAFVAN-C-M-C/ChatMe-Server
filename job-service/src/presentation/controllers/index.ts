import { IDependencies } from "@/application/interfaces/IDependencies"
import { createJobController } from "./createJob"

export const controllers = (dependencies: IDependencies) => {
    return{
        createJob:createJobController(dependencies),
    }
}
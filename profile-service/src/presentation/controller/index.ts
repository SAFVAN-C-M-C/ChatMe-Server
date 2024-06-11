import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserProfileController } from "./getUserProfile"
import { applyRecruiterController } from "./applyRecruiter"
import { updateAvatarController } from "./updateAvatar"
import { updateBioController } from "./updateBio"
import { updateAboutController } from "./updateAbout"

export const controllers = (dependencies: IDependencies) => {
    return{
        getUserProfile:getUserProfileController(dependencies),
        applyRecruiter:applyRecruiterController(dependencies),
        updateAvatar:updateAvatarController(dependencies),
        updateBio:updateBioController(dependencies),
        updateAbout:updateAboutController(dependencies),
        
    }
}
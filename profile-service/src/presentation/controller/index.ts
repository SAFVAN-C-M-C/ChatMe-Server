import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserProfileController } from "./getUserProfile"
import { applyRecruiterController } from "./recruiterApplication"
import { updateAvatarController } from "./updateAvatar"
import { updateBioController } from "./updateBio"
import { updateAboutController } from "./updateAbout"
import { addEducationController } from "./addEducation"
import { addExperienceController } from "./addExperience"
import { addSkillsController } from "./addSkills"
import { addPreferedJobsController } from "./addPreferedJobs"
import { acceptRecruiterController } from "./acceptRecruiter"
import { ignoreRecruiterController } from "./ignoreRecruiter"


export const controllers = (dependencies: IDependencies) => {
    return{
        getUserProfile:getUserProfileController(dependencies),
        applyRecruiter:applyRecruiterController(dependencies),
        updateAvatar:updateAvatarController(dependencies),
        updateBio:updateBioController(dependencies),
        updateAbout:updateAboutController(dependencies),
        addEducation:addEducationController(dependencies),
        addExperience:addExperienceController(dependencies),
        addSkills:addSkillsController(dependencies),
        addPreferedJobs:addPreferedJobsController(dependencies),
        acceptRecruiter:acceptRecruiterController(dependencies),
        ignoreRecruiter:ignoreRecruiterController(dependencies),
    }
}
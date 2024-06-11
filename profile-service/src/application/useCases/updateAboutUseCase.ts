import { IDependencies } from "@/application/interfaces/IDependencies";


export const updateAboutUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateAbout }
    } = dependencies;

    return {
        execute: async (data: {email:string,about:string}) => {
            return await updateAbout(data);
        }
    }
}
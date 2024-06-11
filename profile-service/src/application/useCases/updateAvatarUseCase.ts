import { IDependencies } from "@/application/interfaces/IDependencies";

export const updateAvatarUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateAvatar }
    } = dependencies;

    return {
        execute: async (data: { avatar: string; email: string }) => {
            return await updateAvatar(data);
        }
    }
}
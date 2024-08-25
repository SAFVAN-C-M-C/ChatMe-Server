import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education, Experience } from "@/domain/entities";

export const changeThemeUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { changeTheme }
    } = dependencies;

    return {
        execute: async (data: {
            id: string;
            theme: string;
          }) => {
            return await changeTheme(data);
        }
    }
}
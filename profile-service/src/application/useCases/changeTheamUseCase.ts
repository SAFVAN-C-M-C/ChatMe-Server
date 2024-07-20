import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education, Experience } from "@/domain/entities";

export const changeTheamUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { changeTheam }
    } = dependencies;

    return {
        execute: async (data:{id:string,theam:string}) => {
            return await changeTheam(data);
        }
    }
}
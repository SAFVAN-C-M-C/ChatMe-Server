import { GetApplicationParams,IApplication } from "../entities";


export interface IGetJobApplicationsUseCase {
    execute(data: GetApplicationParams): Promise<IApplication[] | null>;
}
import { GetMyApplicationParams,IApplication } from "../entities";


export interface IGetMyJobApplicationsUseCase {
    execute(data: GetMyApplicationParams): Promise<IApplication[] | null>;
}

import { IUserProfile } from "../entities";


export interface IChangeThemeUseCase {
    execute(data: {
        id: string;
        theme: string;
      }): Promise<IUserProfile | null>;
}
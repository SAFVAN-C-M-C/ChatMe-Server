import { ApplicationParams } from "../entities";

export interface IApplyForJobUseCase {
  execute(data: ApplicationParams): Promise<any | null>;
}

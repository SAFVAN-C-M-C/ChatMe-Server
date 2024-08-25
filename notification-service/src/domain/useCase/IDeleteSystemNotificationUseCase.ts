export interface IDeleteSystemNotificationUseCase {
    execute(id: string): Promise<any | null>;
}
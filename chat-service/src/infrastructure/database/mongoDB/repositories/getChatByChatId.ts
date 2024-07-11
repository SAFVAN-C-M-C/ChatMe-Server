import { Types } from 'mongoose';

import { Chat } from '../models';
import { IChat } from '@/domain/entities/Chat';

export const getChatByChatId = async (id: string): Promise<IChat | null> => {
    try {
        if (!id) {
            console.error('ID not provided');
            throw new Error('Invalid ID provided');
        }

        const result = await Chat.findById(id).populate('messages').exec();

        if (!result) {
            throw new Error('Chat not found');
        }

        // Type assertion to IChat with properly typed messages
        return result as unknown as IChat;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

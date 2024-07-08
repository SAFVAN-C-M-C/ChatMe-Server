import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'chat',
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
    },
    content: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        default: 'text'
    },
    recieverSeen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const Message = model('message', messageSchema);

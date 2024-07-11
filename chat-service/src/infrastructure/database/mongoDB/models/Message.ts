import { ObjectId, Schema, model } from "mongoose";


interface IMessage extends Document {
    _id: ObjectId;
    senderId:ObjectId;
    receiverId:ObjectId;
    messages:string;
    recieverSeen?:boolean
  }
const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
    },
    message: {
        type: String,
        required: true
    },
    recieverSeen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const Message = model<IMessage>('message', messageSchema);

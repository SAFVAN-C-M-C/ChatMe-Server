import { ObjectId } from "mongoose";
import { producer } from "..";
import { UserEntity } from "@/domain/entities";

export default async (data: {
    userId?:ObjectId | string
    email?:string
}, topic?: string) => {
  try {
    const targetTopic = topic || "default-topic";

    await producer.connect();
    const messages = [
      {
        topic: targetTopic,
        messages: [
          {
            key: "addUser",
            value: JSON.stringify(data),
          },
        ],
      },
    ];

    await producer.sendBatch({ topicMessages: messages });
  } catch (error: any) {
    console.error("kafka produce error:", error?.message);
  } finally {
    await producer.disconnect();
  }
};

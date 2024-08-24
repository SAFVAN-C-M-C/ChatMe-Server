import { producer } from "..";

export default async (
  data: {
    userId: string;
    isBlocked: boolean;
  },
  topic?: string
) => {
  try {
    const targetTopic = topic || "default-topic";

    await producer.connect();
    const messages = [
      {
        topic: targetTopic,
        messages: [
          {
            key: "updateBlockStatus",
            value: JSON.stringify(data),
          },
        ],
      },
    ];
    await producer.sendBatch({ topicMessages: messages });
    console.log("message sented to the topic", targetTopic);
  } catch (error: any) {
    console.error("kafka produce error:===============", error?.message);
  } finally {
    await producer.disconnect();
  }
};

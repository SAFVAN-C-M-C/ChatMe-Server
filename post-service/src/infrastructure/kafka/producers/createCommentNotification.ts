import { producer } from "..";


export default async (data: {
    recipientId:string;
    fromUserId:string;
    content:string;
    postId:string
}, topic?: string) => {
  try {
    const targetTopic = topic || "notification-service-topic";

    await producer.connect();
    const messages = [
      {
        topic: targetTopic,
        messages: [
          {
            key: "createCommentNotification",
            value: JSON.stringify(data),
          },
        ],
      },
    ];

    await producer.sendBatch({ topicMessages: messages });
    console.log("message sented to the topic",targetTopic);
    
  } catch (error: any) {
    console.error("kafka produce error:===============", error?.message);
  } finally {
    await producer.disconnect();
  }
};

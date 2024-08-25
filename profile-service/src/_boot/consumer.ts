import { consumer } from "@/infrastructure/kafka";
import {
  IProfileSubscriber,
  createSubscriber,
} from "@/infrastructure/kafka/subscriber";

export const runConsumer = async () => {
  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: "profile-service-topic",
      fromBeginning: true,
    });

    const subscriber = createSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;

        const subscriberMethod = String(key) as keyof IProfileSubscriber;
        const subscriberData = JSON.parse(String(value));

        try {
          await subscriber[subscriberMethod](subscriberData);
        } catch (error: any) {
          console.error(
            `Error processing message from topic: ${error.message}`
          );
          throw new Error(error?.message);
        }
      },
    });
  } catch (error: any) {
    throw new Error("Kafka Consume Error : " + error?.message);
  }
};

export const stopConsumer = async () => {
  await consumer.stop();
  await consumer.disconnect();
};

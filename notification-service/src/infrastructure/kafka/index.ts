import { Kafka, Producer, Consumer, Partitioners } from "kafkajs";
import dotenv from "dotenv"
dotenv.config();

const kafka = new Kafka({
  clientId: "notification-service",
  brokers: [process.env.KAFKA_BROKER_URL as string],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_API_KEY as string,
    password: process.env.KAFKA_API_SECRET as string,
  },
});

export const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});
export const consumer: Consumer = kafka.consumer({
  groupId: "notification-service-kafka-group",
});

export * from "./subscriber";

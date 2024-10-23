import { Kafka,Producer,Partitioners,Consumer } from 'kafkajs'
import dotenv from "dotenv";
dotenv.config();
//deployed
const kafka = new Kafka({
  clientId: "profile-service",
  brokers: [process.env.KAFKA_BROKER_URL as string],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_API_KEY as string,
    password: process.env.KAFKA_API_SECRET as string,
  },
});
//local
// const kafka = new Kafka({
//   clientId: 'profile-service',
//   brokers: ["localhost:29092"]
// })

  export const producer:Producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });
  export const consumer:Consumer = kafka.consumer({groupId:"profile-service-kafka-group"})


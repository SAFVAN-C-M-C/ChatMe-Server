import { Kafka,Producer,Partitioners,Consumer } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'admin-service',
    brokers: ["localhost:29092"]
  })

  export const producer:Producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });
  export const consumer:Consumer = kafka.consumer({groupId:"profile-service-kafka-group"})


import server from "./presentation/server"
import {runConsumer,stopConsumer} from "@/_boot/consumer"
import database from "@/_boot/config";

(async () => {
    try {
      server;
      await  Promise.all([database(),runConsumer()])
        .then(() => console.log("kafka consumer is runnnig"))
        .catch((error:any) => {
          console.error(`Error while initializing Kafka consumer: ${error}`);
          process.exit(0);
        });
        process.on("SIGTERM", async () => {
          console.info("SIGTERM received");
          stopConsumer();
        });
    } catch (error: any) {
      console.error(`Error during initialization: ${error.message}`);
      // process.exit();
    } finally {
      process.on("SIGINT", async () => {
        console.log("\n Server is shutting down...");
        process.exit();
      });
    }
  })();
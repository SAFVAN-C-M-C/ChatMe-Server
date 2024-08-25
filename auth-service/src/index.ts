import server from "@/presentation/index";
import database from "@/_boot/config";
import { runConsumer, stopConsumer } from "./_boot/consumer";

(async () => {
  try {
    server;
    // await database()
    await Promise.all([database(), runConsumer()])
      .then(() => console.log("kafka consumer is runnnig"))
      .catch((error) => {
        console.error(`Error while initializing Kafka consumer: ${error}`);
        process.exit(0);
      });

    process.on("SIGTERM", async () => {
      console.info("SIGTERM received");
      stopConsumer();
    });
  } catch (error: any) {
    console.error("Error on start up: ", error);
  } finally {
    process.on("SIGINT", async () => {
      console.warn("\n Server is shutting down...");
      process.exit();
    });
  }
})();

import server from "@/presentation/server";
import database from "@/_boot/config";
import { runConsumer, stopConsumer } from "./_boot/consumer";

(async () => {
  try {
    // Initialize the server
    server;

    // Initialize the database and Kafka consumer concurrently
    await Promise.all([database(), runConsumer()])
      .then(() => console.log("Database and Kafka consumer are running"))
      .catch((error) => {
        console.error(`Error while initializing Kafka consumer: ${error}`);
        process.exit(1);
      });

    // Handle graceful shutdown on SIGTERM signal
    process.on("SIGTERM", async () => {
      console.info("SIGTERM received. Shutting down gracefully...");
      await stopConsumer();
      process.exit(0);
    });
  } catch (error) {
    console.error("Error on startup:", error);
    process.exit(1);
  } finally {
    // Handle graceful shutdown on SIGINT (Ctrl+C)
    process.on("SIGINT", async () => {
      console.info("SIGINT received. Shutting down server...");
      await stopConsumer();
      process.exit(0);
    });
  }
})();

import server from "@/presentation/server";

(async () => {
  try {
    server;
  } catch (error: any) {
    console.log("Error on start up: ", error);
  } finally {
    process.on("SIGINT", async () => {
      console.log("\n Server is shutting down...");
      process.exit();
    });
  }
})();

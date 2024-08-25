import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async () => {
  try {
    const mongoUrl = String(process.env.MONGO_URI)?.trim();

    if (!mongoUrl) {
      console.error(
        "MongoDB connection string not provided in environment variables"
      );

      throw new Error(
        "MongoDB connection string not provided in environment variables"
      );
    }

    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 30000, 
      socketTimeoutMS: 60000, 
      maxPoolSize: 10, 
    });

    console.log(`
        🍃🍃🍃🍃🍃🍃 MongoDB connected successfully! 🍃🍃🍃🍃🍃🍃
      `);
  } catch (error: any) {
    console.error(`🍁 Database Connection failed 🍁`);
    console.error(error.message);
    process.exit(1);
  }
};

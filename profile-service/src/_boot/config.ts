import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async () => {
  try {
    const mongoUrl = process.env.MONGO_URI?.trim();

    if (!mongoUrl) {
      throw new Error(
        "MongoDB connection string not provided in environment variables"
      );
    }

    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 60000, // 60 seconds
      maxPoolSize: 10, // Adjust as necessary
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
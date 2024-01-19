import mongoose from "mongoose";
import config from "./config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI!);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();

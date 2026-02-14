import mongoose from "mongoose";

const connectDB = async () => {
  // only attempt to connect if a URI is provided
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI not set – skipping MongoDB connection");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // don't crash the whole app; leave route handlers to deal with missing DB
  }
};

export default connectDB;

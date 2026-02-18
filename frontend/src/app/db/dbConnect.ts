import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export async function dbConnect() {
  if (connection.isConnected) return;

  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moonshake";

  await mongoose.connect(mongoUri);
}

export async function dbClose() {
  await mongoose.connection.close();
}

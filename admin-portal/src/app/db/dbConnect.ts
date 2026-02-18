import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (mongoose.connection.readyState === 2) {
    await new Promise((resolve, reject) => {
      mongoose.connection.once("connected", resolve);
      mongoose.connection.once("error", reject);
    });
    return;
  }

  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moonshake";

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB connected successfully");
  } catch (error: any) {
    // During build time, MongoDB may not be available - gracefully handle connection errors
    // Connection will be established at runtime when API routes are called
    if (
      error?.code === "ECONNREFUSED" ||
      error?.name === "MongooseServerSelectionError"
    ) {
      console.warn(
        "MongoDB connection unavailable (likely during build). Will connect at runtime.",
      );
      return;
    }
    // Re-throw other errors
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export async function dbClose() {
  await mongoose.connection.close();
}

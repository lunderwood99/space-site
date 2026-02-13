import mongoose from "mongoose";

const connection: { isConnected?: number} = {}

export async function dbConnect() {
  if(connection.isConnected) return

  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moonshake';
  
  try {
    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState
  } catch (error: any) {
    // During build time, MongoDB may not be available - gracefully handle connection errors
    // Connection will be established at runtime when API routes are called
    if (error?.code === 'ECONNREFUSED' || error?.name === 'MongooseServerSelectionError') {
      console.warn('MongoDB connection unavailable (likely during build). Will connect at runtime.');
      return;
    }
    // Re-throw other errors
    throw error;
  }
}

export async function dbClose() {
  await mongoose.connection.close()
}

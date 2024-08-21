import mongoose from "mongoose";

const connection: { isConnected?: number} = {}

export async function dbConnect() {
  if(connection.isConnected) return

  const db = await mongoose.connect('mongodb://127.0.0.1:27017/moonshake');

  connection.isConnected = db.connections[0].readyState
}

export async function dbClose() {
  await mongoose.connection.close()
}


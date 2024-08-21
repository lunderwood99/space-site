import { dbConnect } from "../../../app/db/dbConnect";

import Show from "../../db/models/Show";

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find();
    return Response.json(shows);
  } catch (err) {
    console.error("Retrieving shows failed: ", err);
    return Response.json({ status: 500 });
  }
}
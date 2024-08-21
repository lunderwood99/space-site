import {dbConnect, dbClose} from "../../db/dbConnect";
import Show from "../../db/models/Show";

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find();
    return Response.json(shows)
  } catch (err) {
    console.debug('Retrieving shows failed: ', err)
  }
  await dbClose()
}

export async function POST(show: { location: string, date: number, link: string }) {
  await dbConnect();
  try {
    await Show.create(show);
  } catch (err) {
    console.debug('Creating show failed: ', err)
  }
  await dbClose()
}

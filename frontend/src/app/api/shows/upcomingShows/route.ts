import moment from "moment";
import { dbConnect } from "../../../../app/db/dbConnect";

import Show from "../../../db/models/Show";

export interface UpcomingShowsResponse {
  status: number;
  shows: (typeof Show)[];
}

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find({ date: { $gte: moment().unix() } });
    shows.sort((a, b) => {
      return a.date - b.date;
    });
    return Response.json({ status: 200, shows });
  } catch (err) {
    console.error("Retrieving upcoming shows failed: ", err);
    return Response.json({ status: 500, shows: null });
  }
}

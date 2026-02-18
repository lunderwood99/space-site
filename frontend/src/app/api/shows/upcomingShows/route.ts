import moment from "moment";
import { dbConnect } from "../../../../app/db/dbConnect";

import Show from "../../../db/models/Show";

// Ensure this route is always run dynamically (no static/cache at build)
export const dynamic = "force-dynamic";

export interface UpcomingShowsResponse {
  status: number;
  shows: (typeof Show)[];
}

const noStoreHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
};

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find({ date: { $gte: moment().unix() } });
    shows.sort((a, b) => {
      return a.date - b.date;
    });
    return Response.json({ status: 200, shows }, { headers: noStoreHeaders });
  } catch (err) {
    console.error("Retrieving upcoming shows failed: ", err);
    return Response.json(
      { status: 500, shows: null },
      { headers: noStoreHeaders }
    );
  }
}

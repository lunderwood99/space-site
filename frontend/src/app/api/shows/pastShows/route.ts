import moment from "moment";
import { dbConnect } from "../../../../app/db/dbConnect";

import Show from "../../../db/models/Show";

export const dynamic = "force-dynamic";

const noStoreHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
};

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find({ date: { $lt: moment().unix() } });
    shows.sort((a, b) => {
      return b.date - a.date;
    });
    return Response.json({ status: 200, shows }, { headers: noStoreHeaders });
  } catch (err) {
    console.error("Retrieving past shows failed: ", err);
    return Response.json(
      { status: 500, shows: null },
      { headers: noStoreHeaders },
    );
  }
}

import moment from "moment";
import { dbConnect } from "../../../../app/db/dbConnect";

import Show from "../../../db/models/Show";

export async function GET() {
  await dbConnect();
  try {
    const shows = await Show.find({ date: { $lt: moment().unix() } });
    shows.sort((a, b) => {
      return b.date - a.date;
    });
    return Response.json({ status: 200, shows });
  } catch (err) {
    console.error("Retrieving past shows failed: ", err);
    return Response.json({ status: 500, shows: null });
  }
}

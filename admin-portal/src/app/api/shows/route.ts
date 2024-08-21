import { dbConnect, dbClose } from "../../db/dbConnect";
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

export async function POST(request: Request) {
  const req = await request.json();
  await dbConnect();
  try {
    await Show.create(req);
    return Response.json({ status: 201 });
  } catch (err) {
    console.error("Creating show failed: ", err);
    return Response.json({ status: 500 });
  }
}

export async function DELETE(request: Request) {
  const req = await request.json();
  await dbConnect();
  try {
    const res = await Show.deleteOne({ _id: req.showId });
    console.log(res);
    return Response.json({ status: 204 });
  } catch (err) {
    console.error("Deleting show failed: ", err);
    return Response.json({ status: 500 });
  }
}

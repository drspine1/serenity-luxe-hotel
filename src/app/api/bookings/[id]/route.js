// /api/bookings/[id]/route.js
import connectToDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

import Lodging from "@/lib/lodgingSchema";
export async function GET(req, context) {
  await connectToDB();
  const { id } =await context.params;
  try {
    const booking = await Lodging.findById(id);
    if (!booking)
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    return NextResponse.json(booking);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error fetching booking" },
      { status: 500 }
    );
  }
}

// /app/api/admin/bookings/route.js
import connectToDB from "@/lib/mongodb";
import Lodging from "@/lib/lodgingSchema";

export async function GET(req) {
  try {
    await connectToDB();
    const url = new URL(req.url);
    const query = url.searchParams.get("q");

    const filter = query
      ? {
          $or: [
            { bookingRef: { $regex: query, $options: "i" } },
            { userEmail: { $regex: query, $options: "i" } },
          ],
        }
      : {};

    const bookings = await Lodging.find(filter).sort({ createdAt: -1 });

    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch bookings" }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await connectToDB();
    const { bookingId, status } = await req.json();      

    const booking = await Lodging.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );

    return new Response(JSON.stringify(booking), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update booking" }), { status: 500 });
  }
}

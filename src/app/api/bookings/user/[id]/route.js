// /app/api/bookings/user/[id]/route.js
import Lodging from "@/lib/lodgingSchema";
import connectToDB from "@/lib/mongodb";

export async function GET(req, context) {
  const { id } =await context.params;
  try {
    await connectToDB();
    const bookings = await Lodging.find({ userId: id  });
    console.log("Fetched bookings for user:", bookings);
    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch bookings" }), { status: 500 });
  }
}

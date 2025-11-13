import Lodging from "@/lib/lodgingSchema";
import connectToDB from "@/lib/mongodb";

export async function DELETE(req, context) {
  const { id } = await context.params;
  try {
    await connectToDB();
    const deletedBooking = await Lodging.findByIdAndDelete(id);
    if (!deletedBooking) {
      return new Response(JSON.stringify({ error: "Booking not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: "Booking deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete booking" }), { status: 500 });
  }
}  
           
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// Test Stripe connection on startup
try {
  const balance = await stripe.balance.retrieve(); // just a harmless test call
  console.log("✅ Stripe connected successfully!");
} catch (error) {
  console.error("❌ Stripe connection failed:", error.message);
}


export async function POST(req) {
  try {
    const { amount, bookingId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Hotel Room Booking" },
            unit_amount: amount * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?bookingId=${bookingId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Payment failed" }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const { amount, bookingId } = await req.json();

//     console.log("Checkout request:", { amount, bookingId });

//     // 🧪 Test response first
//     return new Response(
//       JSON.stringify({
//         success: true,
//         message: "Checkout endpoint reached successfully",
//         amount,
//         bookingId,
//         url: "https://example.com/success",
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Checkout API error:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: "Error in checkout API" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }


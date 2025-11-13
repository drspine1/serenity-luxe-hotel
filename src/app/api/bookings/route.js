
import { auth } from "@clerk/nextjs/server";
// import nodemailer from "nodemailer";
import connectToDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose"
import Lodging from "@/lib/lodgingSchema";

export async function POST(req) {
  console.log("mogoDB connection ",mongoose.connection.readyState);
  
  try {
     await connectToDB()
      // const { userId } = auth();
      // console.log("authenticateduserId", userId);
      

    // if (!userId) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    // }
    const body = await req.json();
    console.log("Booking received:", body);
  //  const {userEmail,userName}=body;

    const booking = await Lodging.create(body); 
    
      // Send confirmation email (optional)
    // const transporter = nodemailer.createTransport({
    //   service: "gmail", // or any email provider you use
    //   auth: {
    //     user: process.env.SMTP_USER, // your email
    //     pass: process.env.SMTP_PASS, // app password
    //   },
    // });

    // await transporter.sendMail({
    //   from: `"DeluxStay Hotel" <${process.env.SMTP_USER}>`,
    //   to: userEmail,
    //   subject: "Your Booking Confirmation - DeluxStay",
    //   html: `
    //     <h2>Booking Confirmed!</h2>
    //     <p>Hi ${userName},</p>
    //     <p>Thank you for choosing <strong>DeluxStay</strong>.</p>
    //     <p>Here are your booking details:</p>
    //     <ul>
    //       <li><strong>Booking Ref:</strong> ${bookingRef}</li>
    //       <li><strong>Room:</strong> ${roomName}</li>
    //       <li><strong>Check-In:</strong> ${checkIn}</li>
    //       <li><strong>Check-Out:</strong> ${checkOut}</li>
    //       <li><strong>Total:</strong> $${totalPrice}</li>
    //     </ul>
    //     <p>We look forward to hosting you </p>
    //   `,
    // });
    return NextResponse.json(booking, { success: true, message: "Booking saved", _id: "test123" })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessContent () {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId) return;
      try {
        const res = await fetch(`/api/bookings/${bookingId}`);
        if (res.ok) {
          const data = await res.json();
          setBooking(data);
        } else {
          console.error("Failed to fetch booking details.");
        }
      } catch (err) {
        console.error("Error fetching booking:", err);
      }
    };
    fetchBooking();
  }, [bookingId]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#25003c] to-[#36005a] text-white px-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full border border-white/20"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ rotate: -20 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CheckCircle className="text-green-400 w-20 h-20" />
        </motion.div>

        <h1 className="text-3xl font-bold text-green-400 mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-200 mb-8">
          Thank you for booking with us. Your reservation has been confirmed 
        </p>

        {booking ? (
          <div className="text-left bg-white/5 rounded-lg p-5 border border-white/10 space-y-2">
            <p><strong>Guest Name:</strong> {booking.userName}</p>
            <p><strong>Email:</strong> {booking.userEmail}</p>
            <hr className="my-3 border-white/20" />
            <p><strong>Room:</strong> {booking.roomName}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>
            <p><strong>Check-In:</strong> {booking.checkIn}</p>
            <p><strong>Check-Out:</strong> {booking.checkOut}</p>
            <p><strong>Total:</strong> ${booking.totalPrice}</p>
          </div>
        ) : (
          <p className="text-gray-300">Loading booking details...</p>
        )}

        <Link
          href="/home"
          className="mt-8 inline-block bg-[orangered] text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 mr-0 md:mr-2.5"
        >
          Back to Home
        </Link>
        <Link
          href="/booking-details"
          className="mt-8 inline-block bg-[orangered] text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300"
        >
          booking details
        </Link>
      </motion.div>

      <motion.footer
        className="mt-10 text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © {new Date().getFullYear()} DeluxStay Hotel. All rights reserved.
      </motion.footer>
    </motion.div>
  );
}
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#36005a] to-[#25003c] text-center text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
      >
        Ready to Experience True Luxury?
      </motion.h2>
      <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
        Discover elegant rooms, world-class dining, and unforgettable service.
      </p>
      <Link
        href="/rooms"
        className="bg-[#ff7b02] text-[#25003c] font-semibold px-6 py-3 rounded-full hover:bg-[#e5a55d] transition"
      >
        Explore Rooms
      </Link>
    </section>
  );
}

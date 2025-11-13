"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AmenitiesTeaser() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
         className="text-3xl font-semibold text-[#36005a] mb-4">What We Offer</motion.h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">From an infinity pool to a spa and fine dining — discover amenities that make your stay effortless.</p>
        <Link href="/amenities" className="inline-block bg-[#ff7b02] px-6 py-3 rounded-full text-[#25003c] font-semibold hover:bg-[#e5a55d] transition">See All Amenities</Link>
      </div>
    </section>
  );
}

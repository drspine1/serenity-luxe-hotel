"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#36005a] to-[#25003c] text-white py-28 px-6 sm:px-10 text-center overflow-hidden h-screen flex flex-col justify-center">
      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Serenity LuxeHaven Hotel
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8">
          Experience timeless elegance surrounded by nature. Your comfort, our passion.
        </p>
        <Link href="/rooms">
          <button  className="bg-[#ff7b02] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e56f00] transition capitalize">book your stay</button>
        </Link>
      </motion.div>

      <div className="absolute inset-0 opacity-10 bg-[url('/images/dent-b.jpg')] bg-cover bg-center" />
    </section>
  );
}

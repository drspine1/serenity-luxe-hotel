"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/gallery8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#25003c]/70"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4">
          World-Class <span className="text-[#ff7b02]">Amenities</span>
        </h1>
        <p className="text-lg text-gray-200">
          Immerse yourself in comfort, wellness, and experiences crafted for unforgettable stays.
        </p>
      </motion.div>
    </section>
  );
}

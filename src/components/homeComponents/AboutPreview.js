"use client";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#e5a55d]/10 text-center  pt-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#25003c] mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 px-4">
           LuxeHaven  blends elegance and comfort in the heart of nature. Every
          detail is crafted to give you a memorable, peaceful experience.
        </p>
        <a
          href="/about"
          className="text-[#36005a] border border-[#36005a] px-5 py-2 rounded-lg hover:bg-[#36005a] hover:text-white transition"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#36005a] to-[#25003c] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/gallery3.jpg')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Where Luxury Meets Nature — Welcome to <span className="text-[#e5a55d]">LuxeHaven</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-100"
        >
          A sanctuary crafted for comfort, curated for experience. From handcrafted suites to award-winning dining,
          every detail at LuxeHaven is designed to leave a lasting memory.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link
            href="/rooms"
            className="mt-8 inline-block bg-[#ff7b02] hover:bg-[#e5a55d] text-[#25003c] px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

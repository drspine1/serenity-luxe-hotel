"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#25003c] to-[#36005a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-[#ff7b02]">LuxeHaven</span> Experience
          </h2>
          <p className="text-gray-200 mb-5">
            More than a stay — it's a journey of indulgence. From our sunrise yoga on the terrace
            to moonlit dining under the stars, every moment is designed to delight your senses.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Infinity pool with panoramic views</li>
            <li>World-class spa & wellness center</li>
            <li>Personal concierge for every guest</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl relative w-full h-64 md:h-80 ">
            <Image
              src="/images/gallery4.jpg"
              fill
              alt="Luxury hotel experience"
              className="object-cover "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

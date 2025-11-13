"use client";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Experiences() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#25003c] to-[#36005a] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Exclusive Experiences</h2>
          <p className="text-gray-200 mb-6">
            Our guests enjoy more than just comfort. From sunset lounges to local cultural tours, every moment is curated with care.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✨ Private sunset cruises</li>
            <li>🍷 Wine-tasting evenings</li>
            <li>🎭 Local art & music sessions</li>
          </ul>
        </motion.div>
           <motion.div className="rounded-3xl w-full h-80  shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
          transition={{ duration: 0.6 }}>
          <Image
          src="/images/gallery4.jpg"
          fill
          alt="Exclusive Experiences"
          className="object-cover"
            />
           </motion.div>
     
      </div>
    </section>
  );
}

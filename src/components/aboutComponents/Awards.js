"use client";
import { motion } from "framer-motion";

const awards = [
  { title: "Regional Culinary Award", year: 2018 },
  { title: "Top Eco-Friendly Hotel", year: 2023 },
  { title: "Traveler’s Choice", year: 2024 },
];

export default function Awards() {
  return (
    <section className="py-12 px-6 bg-[#25003c] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
         className="text-2xl font-semibold mb-6">Awards & Recognition</motion.h3>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          {awards.map((a, i) => (
            <motion.div key={i} className="bg-[#36005a] rounded-lg px-6 py-4 shadow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}}>
              <div className="text-[#e5a55d] font-bold text-lg">{a.title}</div>
              <div className="text-sm text-gray-200">{a.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

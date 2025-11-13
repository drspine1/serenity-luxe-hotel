"use client";
import { motion } from "framer-motion";

export default function Wellness() {
  return (
    <section className="py-20 bg-[#25003c] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          Wellness & Serenity
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10">
          From sunrise yoga to holistic therapies, our spa and wellness offerings are designed to restore your balance.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {["Spa Therapies", "Yoga Pavilion", "Infinity Pool"].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#36005a] p-6 rounded-2xl hover:bg-[#ff7b02] hover:text-[#25003c] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
                viewport={{once:true}}
            >
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className="text-sm">
                Experience tranquility and rejuvenation like never before.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

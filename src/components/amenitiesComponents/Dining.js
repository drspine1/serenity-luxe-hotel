"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Dining() {
  return (
    <section className="py-20 bg-[#f9f7fb]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
         className="rounded-2xl w-full h-80 md:h-96  relative overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
           <Image
          src="/images/dinning.jpg"
          fill
          alt="Fine Dining"
          className=" object-cover"
         />
       </motion.div>
       

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#25003c] mb-4">
            Dining & Bar
          </h2>
          <p className="text-gray-700 mb-6">
            Savor global flavors and handcrafted cocktails. Our master chefs and mixologists bring
            art to every meal.
          </p>
          <p className="text-[#36005a] font-semibold">
            🍽️ All-day dining | 🍸 Rooftop Bar | ☕ Café by the Garden
          </p>
        </motion.div>
      </div>
    </section>
  );
}

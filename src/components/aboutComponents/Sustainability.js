"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Sustainability() {
  return (
    <section className="py-16 px-6 bg-[#f4f0f8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once:true}} className="space-y-4">
          <h3 className="text-3xl font-semibold text-[#36005a] mb-4">Sustainability & Community</h3>
          <p className="text-gray-700 mb-4">We’re committed to minimizing environmental impact and giving back to the community through local partnerships, responsible sourcing, and energy-efficient operations.</p>
          <ul className="text-gray-700 list-disc ml-5 space-y-2">
            <li>Locally sourced ingredients in our kitchens</li>
            <li>Solar-assisted hot water & LED lighting</li>
            <li>Community training and local hiring initiatives</li>
          </ul>
        </motion.div>

        <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once:true}}>
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 md:h-80 w-full ">
            <Image src="/images/gallery2.jpg"
              fill
            alt="sustainability" 
            className=" object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

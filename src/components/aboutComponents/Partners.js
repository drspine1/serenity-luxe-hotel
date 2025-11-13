"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const partners = [
  { name: "AirLux", logo: "/images/logo1.jpg" },
  { name: "EcoFarm Co.", logo: "/images/logo2.jpg" },
  { name: "TravelEase", logo: "/images/logo3.jpg" },
  { name: "OceanSpirit", logo: "/images/logo4.jpg" },
];

export default function Partners() {
  return (
    <section className="py-16 px-6 bg-[#f4f0f8]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-[#36005a] mb-8">
          Trusted Partners & Collaborations
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          We collaborate with select brands that share our passion for quality and sustainability — from local farms to global travel leaders.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{once:true}}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center"
        >
          {partners.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
             <div className="h-16 w-32 relative">
                   <Image
                   src={p.logo}
                   fill
                   alt={p.name}
                   className=" object-contain grayscale hover:grayscale-0 transition duration-300"
              />
             </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

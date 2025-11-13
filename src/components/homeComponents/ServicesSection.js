"use client";
import { motion } from "framer-motion";
import { Coffee, Car, Wifi, Utensils, Dumbbell, HandPlatter  } from "lucide-react";

const services = [
  { icon: Coffee, title: "24/7 Room Service", desc: "Delicious meals & drinks delivered anytime." },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Fast and reliable internet in every corner." },
  { icon: Car, title: "Airport Pickup", desc: "Smooth transfer directly from the airport." },
  { icon: HandPlatter , title: "Luxury Spa", desc: "Relaxation and rejuvenation with expert therapists." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Modern gym facilities for your daily routine." },
  { icon: Utensils, title: "Restaurant & Bar", desc: "Fine dining experience with local flavors." },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f0f0f0] py-20 mt-40">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-[#25003c] mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
         viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center border-t-4 border-[#36005a] transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <item.icon className="w-10 h-10 mx-auto text-[#ff7b02] mb-4" />
            <h3 className="text-lg font-semibold text-[#36005a]">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

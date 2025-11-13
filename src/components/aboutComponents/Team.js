"use client";
import { motion } from "framer-motion";
import Image from "next/image"
const team = [
  { name: "Aisha Bello", role: "General Manager", img: "/images/md1.jpg" },
  { name: "Marco Rivera", role: "Head Chef", img: "/images/md.jpg" },
  { name: "Chinwe Okafor", role: "Guest Relations", img: "/images/md2.jpg" },
];

export default function Team() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-[#36005a] mb-6">Meet the Team</h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">The people that bring the LuxeHaven experience to life.</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div key={i} className="bg-white rounded-2xl p-6 shadow-md" 
            initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
             >
             
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-[#e5a55d] relative">
                <Image src={m.img} 
                fill={true}
                alt={m.name} className=" object-cover" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">{m.name}</h4>
              <p className="text-gray-600">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
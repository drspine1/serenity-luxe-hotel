"use client";
import { motion } from "framer-motion";

const timeline = [
  { year: "2005", title: "Founded", text: "LuxeHaven opened its doors with a vision to blend luxury and local culture." },
  { year: "2012", title: "First Expansion", text: "Expanded with a new garden wing and rooftop lounge." },
  { year: "2018", title: "Fine Dining Award", text: "Our restaurant won a regional culinary award." },
  { year: "2023", title: "Sustainability Initiative", text: "Launched eco programs and community partnerships." },
];

export default function History() {
  return (
    <section className="py-20 px-6">
      <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-semibold text-[#36005a] mb-6 text-center">Our Story</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
          From humble beginnings to becoming a sanctuary sought by travelers, our history is built on service, craft, and community.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div key={idx} className="md:flex md:items-start md:gap-6" whileInView={{ opacity: 1, y: 0 }} 
              viewport={{once:true}}
              initial={{ opacity: 0, y: 20 }} 
              transition={{ delay: idx * 0.12 }}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:order-1 md:text-right" : ""}`}>
                  <div className="inline-block bg-[#36005a] text-white px-4 py-2 rounded-full font-semibold">
                    {item.year}
                  </div>
                </div>

                <div className="md:w-1/2 bg-white/90 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#25003c]">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

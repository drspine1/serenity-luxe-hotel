"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
  { name: "Deluxe Suite", img: "/images/room1.jpg", price: 200 },
  { name: "Executive Room", img: "/images/room2.jpg", price: 150 },
  { name: "Nature Villa", img: "/images/room3.jpg", price: 250 },
];

export default function RoomShowcase() {
  return (
    <section className="py-20 bg-white  mt-40">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#25003c] mb-10">
        Featured Rooms
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 max-w-6xl mx-auto">
        {rooms.map((room, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Image src={room.img} alt={room.name} 
            height={150}
            width={400}
            className=" object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#36005a]">{room.name}</h3>
              <p className="text-gray-600">${room.price} / night</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery1.jpg", className: "col-span-2 row-span-2" },
  { src: "/images/gallery2.jpg", className: "" },
  { src: "/images/gallery3.jpg", className: "row-span-2" },
  { src: "/images/gallery4.jpg", className: "" },
  { src: "/images/gallery5.jpg", className: "col-span-2" },
  { src: "/images/gallery6.jpg", className: "col-span-2" },
  { src: "/images/gallery7.jpg", className: "col-span-2 " },
  { src: "/images/gallery8.jpg", className: "" },
  { src: "/images/gallery9.jpg", className: "" },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-[#f8f5fc] text-center my-40">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-[#36005a] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
         viewport={{ once: true }}
      >
        Explore Our World
      </motion.h2>

      {/* Responsive Bento Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid 
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
          auto-rows-[180px] sm:auto-rows-[230px] lg:auto-rows-[260px]
          gap-3 px-4
        "
      >
        {galleryImages.map((item, i) => (
          <motion.div
            key={i}
            className={`
              relative overflow-hidden rounded-2xl shadow-lg cursor-pointer 
              ${item.className} 
              transition-all duration-500 h-full w-full
            `}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
             viewport={{ once: true }}
          >
            <Image
              src={item.src}
              fill
              alt={`Hotel Gallery ${i + 1}`}
              className=" object-cover hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-4">
              <p className="text-white font-semibold text-sm sm:text-base">
                Luxurious View {i + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

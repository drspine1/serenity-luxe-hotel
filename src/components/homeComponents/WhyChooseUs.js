"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect — subtle background shift on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <section  ref={ref} 
    className="relative py-24 px-6 md:px-12 overflow-hidden  mt-40">
      {/* Background Image */}
         <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/images/gallery4.jpg')] bg-cover bg-center"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#25003c]/60 via-[#25003c]/70 to-[#25003c]/80"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold mb-6"
        >
          Why Choose <span className="text-[#e5a55d]">Our Hotel</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-gray-100/90 max-w-4xl mx-auto"
        >
          At <span className="font-bold text-[#e5a55d]">LuxeHaven Hotel</span>, we
          redefine comfort and elegance. Every detail — from our{" "}
          <span className="font-bold text-[#ff7b02]">handcrafted suites</span> to
          our <span className="font-bold text-[#e5a55d]">award-winning dining</span> —
          is designed to give you an experience beyond ordinary stays.
          <br />
          <br />
          Enjoy seamless{" "}
          <span className="font-bold text-[#ff7b02]">check-ins</span>, personalized{" "}
          <span className="font-bold text-[#e5a55d]">guest services</span>, and
          breathtaking views of nature’s finest. Our hotel combines{" "}
          <span className="font-bold text-[#ff7b02]">modern luxury</span> with a
          touch of <span className="font-bold text-[#e5a55d]">warm hospitality</span>,
          ensuring every moment feels special.
          <br />
          <br />
          Whether you’re here for{" "}
          <span className="font-bold text-[#ff7b02]">business</span> or{" "}
          <span className="font-bold text-[#e5a55d]">relaxation</span>, our dedicated
          team guarantees your comfort, privacy, and satisfaction — because at
          LuxeHaven,{" "}
          <span className="font-bold text-[#ff7b02]">
            your peace of mind is our priority
          </span>.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[3px] bg-[#e5a55d] mx-auto mt-10 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}

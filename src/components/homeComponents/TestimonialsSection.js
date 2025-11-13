"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Sophia M.",
    text: "Absolutely breathtaking experience! The nature-inspired decor and calm environment made it unforgettable.",
    image: "/images/md1.jpg",
  },
  {
    name: "James K.",
    text: "Every detail was perfect — from the warm welcome to the luxurious suites overlooking the forest.",
    image: "/images/md.jpg",
  },
  {
    name: "Isabella R.",
    text: "The spa and cuisine are unmatched. This hotel redefines peace and elegance.",
    image: "/images/md2.jpg",
  },
  {
    name: "David L.",
    text: "Loved the eco-friendly touch and scenic rooms. Can’t wait to come back next summer!",
    image: "/images/md3.jpg"},
 
];

export default function TestimonialsSection() {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"], // move halfway (looped content)
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };
    loop();
  }, [controls]);

  return (
    <section className="py-20 bg-[#25003c] text-white overflow-hidden relative  mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our Guests Say
      </h2>

      <div
        className="overflow-hidden group"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { duration: 20, ease: "linear", repeat: Infinity },
          })
        }
      >
        <motion.div
          className="flex gap-8 w-[200%]"
          animate={controls}
        >
          {/* Repeat testimonials twice for infinite loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] sm:min-w-[350px] bg-[#36005a] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:bg-[#4b0082] transition-all duration-500"
            >
              <p className="text-sm sm:text-base italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#e5a55d]"
                />
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const amenitiesData = [
  {
    id: 1,
    title: "Wi-Fi access in guest rooms and common areas",
    price: "free",
    desc: "Enjoy unlimited high-speed internet throughout the hotel to stay connected, stream, or work seamlessly.",
    img: "/images/wifi.jpg",
    reverse: true,
  },
  {
    id: 2,
    title: "Parking Lot",
    price: "free",
    desc: "Secure on-site parking is available for all our guests, with 24-hour surveillance for your safety.",
    img: "/images/parking_lot.jpg",
    reverse: false,
  },
  {
    id: 3,
    title: "Room Service",
    price: "free",
    desc: "Delicious meals and refreshments brought directly to your room any time of day or night.",
    img: "/images/offer2.jpg",
    reverse: true,
  },
  {
    id: 4,
    title: "Spa & Beauty Center",
    price: "$59 / person",
    desc: "Relax, unwind, and rejuvenate with our signature spa treatments and professional wellness services.",
    img: "/images/spa.jpg",
    reverse: false,
  },
  {
    id: 5,
    title: "Conference Hall for Business and Events",
    price: "$400",
    desc: "Spacious and elegant event space for meetings, weddings, and special occasions with full audio-visual setup.",
    img: "/images/hall.jpg",
    reverse: true,
  },
  {
    id: 6,
    title: "Gym",
    price: "free",
    desc: "Stay active during your stay with our fully equipped modern gym and personal trainers available on request.",
    img: "/images/gallery8.jpg",
    reverse: false,
  },
];

const AmenityCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
      className={`flex flex-col ${
        item.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center mb-20`}
    >
      {/* Image */}
      <div className=" flex-[50%]  mt-10 md:mt-0 relative overflow-hidden">
        <Image
          src={item.img}
           width={600}
            height={200}
          alt={item.title}
          className=" object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text */}
      <div className="flex-[50%] px-5">
        <h2 className="font-semibold text-xl pb-3 capitalize text-gray-800">{item.title}</h2>
        {item.price.toLowerCase() === "free" ? (
          <p className="uppercase text-lg font-semibold text-[orangered] pb-4">
            {item.price}
          </p>
        ) : (
          <p className="text-lg text-[#616161] pb-4">
            <span className="font-semibold text-2xl text-[orangered]">
              {item.price.split(" ")[0]}
            </span>{" "}
            {item.price.split(" ").slice(1).join(" ")}
          </p>
        )}
        <p className="text-gray-700">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default function AmenitiesGrid() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto text-center my-38 mb-48">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      >
       
        <h2 className="capitalize text-3xl md:text-4xl mb-14 font-bold text-[#25003c]">
          Our <span className="text-[orangered]">Amenities</span>
        </h2>
      </motion.div>

      {/* Amenities List */}
      <div>
        {amenitiesData.map((item) => (
          <AmenityCard key={item.id} item={item} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
        className="my-40 flex flex-col md:flex-row justify-between items-center mx-auto w-full md:w-[70%] border-2 border-[#ff7b02] p-6 md:p-8 rounded-2xl shadow"
      >
        <p className="text-sm md:text-xl font-medium text-[#25003c] mb-4 md:mb-0">
          For Reservation or Query?
        </p>
        <p className="text-white bg-[orangered] p-3 font-bold text-xs md:text-lg rounded-xl md:rounded-full md:px-10 shadow-md hover:scale-105 transition-transform">
          +10 576 377 4786
        </p>
      </motion.div>
    </div>
  );
}

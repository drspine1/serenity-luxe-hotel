
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";


export default function RoomsSection() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=hotel+room+interior&per_page=9&client_id=${accessKey}`
       
      );
      if (!res.ok) {
        console.error("Failed to fetch images from Unsplash");
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setIsLoading(false);
    console.log(data);
    

      const fakeRooms = data.results.map((item, index) => ({
        id: item.id,
        name: `Room ${index + 1}`,
        type: index % 2 === 0 ? "Deluxe Suite" : "Executive Room",
        price: 150 + index * 20,
        rating: (4 + (index % 2 ? 0.5 : 0)).toFixed(1),
        image: item.urls.small,
        description:
          "Experience comfort and elegance in our spacious, fully equipped room designed for relaxation.",
      }));

      setRooms(fakeRooms);
    };

    fetchRooms();
  }, []);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  return (
    <>
    
    
      
       <section className="py-12 px-6 bg-gray-50 pt-40">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Our Rooms</h2>
     {
       isLoading ? (
        <p className="text-center">Loading rooms...</p>
      ) : (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={room.image}
              alt={room.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-gray-700">{room.name}</h3>
              <p className="text-gray-500 font-semibold">{room.type}</p>
              <div className="flex items-center gap-1 text-yellow-500">
                <FaStar />
                <span>{room.rating}</span>
              </div>
              <p className="text-gray-700 text-sm ">{room.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-lg text-gray-700">${room.price}/night</span>
                <button
                  onClick={() => handleBookNow(room)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      )
     }

      {isBookingModalOpen && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}
    </section>
      
      
    
    </>
  );
}

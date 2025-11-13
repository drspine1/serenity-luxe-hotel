// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useUser } from "@clerk/nextjs";


// const initialValue = {
//   checkIn: "",
//   checkOut: "",
//   guests: 1,
// };

// export default function BookingModal({ room, onClose }) {
//   const { user } = useUser();
//   console.log("Current user:", user);
//   const [formData, setFormData] = useState(initialValue);
//   const [nights, setNights] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

// console.log(formData);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // compute nights between dates
//   const computeNights = (inDate, outDate) => {
//     if (!inDate || !outDate) return 0;
//     const d1 = new Date(inDate);
//     const d2 = new Date(outDate);
//     d1.setHours(0, 0, 0, 0);
//     d2.setHours(0, 0, 0, 0);
//     const diffMs = d2 - d1;
//     const days = diffMs / (1000 * 60 * 60 * 24);
//     return days > 0 ? days : 0;
//   };

// //   function computeNights(checkIn, checkOut) {
// //   if (!checkIn || !checkOut) return 0;

// //   const oneDay = 1000 * 60 * 60 * 24; // how many milliseconds are in 1 day
// //   const start = new Date(checkIn).getTime(); // convert to milliseconds
// //   const end = new Date(checkOut).getTime();

// //   const days = Math.floor((end - start) / oneDay); // total full days
// //   return days > 0 ? days : 0;
// // }

//   useEffect(() => {
//     const n = computeNights(formData.checkIn, formData.checkOut);
//     setNights(n);
//     if (room && n > 0) {
//       setTotalPrice(n * room.price);
//     } else {
//       setTotalPrice(0);
//     }
//   }, [formData.checkIn, formData.checkOut, formData.guests, room]);

//   const validate = () => {
//     if (!formData.checkIn || !formData.checkOut) {
//       alert("Please select check-in and check-out dates.");
//       return false;
//     }
//     if (nights <= 0) {
//       alert("Check-out date must be after check-in date.");
//       return false;
//     }
//     return true;
//   };

//   const handleBooking = async () => {
//     if (!validate()) return;
//     setIsLoading(true);
//     // Generate a random booking reference
//     const status = "confirm"
// const bookingRef = `LXH${Math.floor(1000 + Math.random() * 5901)}`;

//     const bookingData = {
//       ...formData,
//       roomId: room.id,
//       roomName: room.name,
//       nights,
//       totalPrice,
//       createdAt: new Date().toISOString(),
//       userId: user?.id,
//       userName: user?.fullName,
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//       status: status,
//       bookingRef: bookingRef,
     
//     };
//  console.log("Booking Data:", bookingData);
//     try {
//       // Save booking to MongoDB
//       const res = await fetch("/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       const data = await res.json();
//       console.log("Booking response:", data);

//       // Redirect to Stripe checkout
//       const stripeRes = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: totalPrice, bookingId: data._id }),
//       });

//       const stripeData = await stripeRes.json();
//       window.location.href = stripeData.url;
//     } catch (err) {
//       console.error(err);
//       alert("Error during booking. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 flex bg-opacity-0 items-center justify-center bg-black/90 z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         className="bg-white rounded-xl p-6 w-96 shadow-lg"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//       >
//         <h2 className="text-xl font-semibold mb-4">
//           Book {room.name} - ${room.price}/night
//         </h2>

//         <div className="space-y-3">
//           <label className="block text-sm font-medium">Check-In</label>
//           <input
//             type="date"
//             name="checkIn"
//             value={formData.checkIn}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//           />

//           <label className="block text-sm font-medium">Check-Out</label>
//           <input
//             type="date"
//             name="checkOut"
//             value={formData.checkOut}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//           />

//           <label className="block text-sm font-medium">Guests</label>
//           <input
//             type="number"
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//             min={1}
//             className="w-full border p-2 rounded-lg"
//           />

//           {nights > 0 && (
//             <div className="bg-amber-50 text-amber-900 p-2 rounded-lg mt-2 text-center">
//               <p>{nights} night(s) booked</p>
//               <p className="font-semibold mt-1">Total: ${totalPrice}</p>
//             </div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-5">
//           <button
//             onClick={onClose}
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleBooking}
//             disabled={isLoading}
//             className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700"
//           >
//             {isLoading ? "Processing..." : "Confirm Booking"}
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";

const initialValue = {
  checkIn: "",
  checkOut: "",
  guests: 1,
};

export default function BookingModal({ room, onClose }) {
  const { user } = useUser();
  const [formData, setFormData] = useState(initialValue);
  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showTestInfo, setShowTestInfo] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const computeNights = (inDate, outDate) => {
    if (!inDate || !outDate) return 0;
    const d1 = new Date(inDate);
    const d2 = new Date(outDate);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    const diffMs = d2 - d1;
    const days = diffMs / (1000 * 60 * 60 * 24);
    return days > 0 ? days : 0;
  };

  useEffect(() => {
    const n = computeNights(formData.checkIn, formData.checkOut);
    setNights(n);
    setTotalPrice(room && n > 0 ? n * room.price : 0);
  }, [formData.checkIn, formData.checkOut, formData.guests, room]);

  const validate = () => {
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select check-in and check-out dates.");
      return false;
    }
    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return false;
    }
    return true;
  };

  const handleBooking = async () => {
    if (!validate()) return;
    setIsLoading(true);

    const bookingRef = `LXH${Math.floor(1000 + Math.random() * 5901)}`;
    const bookingData = {
      ...formData,
      roomId: room.id,
      roomName: room.name,
      nights,
      totalPrice,
      createdAt: new Date().toISOString(),
      userId: user?.id,
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      status: "confirm",
      bookingRef,
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      const stripeRes = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice, bookingId: data._id }),
      });

      const stripeData = await stripeRes.json();
      window.location.href = stripeData.url;
    } catch (err) {
      console.error(err);
      alert("Error during booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex bg-opacity-0 items-center justify-center bg-black/90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-xl p-6 w-96 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <h2 className="text-xl font-semibold mb-4">
          Book {room.name} - ${room.price}/night
        </h2>

        <div className="space-y-3">
          <label className="block text-sm font-medium">Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <label className="block text-sm font-medium">Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <label className="block text-sm font-medium">Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min={1}
            className="w-full border p-2 rounded-lg"
          />

          {nights > 0 && (
            <div className="bg-amber-50 text-amber-900 p-2 rounded-lg mt-2 text-center">
              <p>{nights} night(s) booked</p>
              <p className="font-semibold mt-1">Total: ${totalPrice}</p>
            </div>
          )}
        </div>

        {/* ✅ Collapsible Test Payment Info */}
        <div className="mt-5 border border-dashed border-gray-400 bg-gray-50 p-3 rounded-lg">
          <button
            onClick={() => setShowTestInfo((prev) => !prev)}
            className="text-orange-600 font-medium flex items-center justify-between w-full"
          >
            ⚠ Test Payment Info
            <span>{showTestInfo ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {showTestInfo && (
              <motion.div
                className="mt-2 text-sm text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>Use this test card for Stripe checkout:</p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Card:</strong> 4242 4242 4242 4242</li>
                  <li><strong>Expiry:</strong> Any future date (e.g. 12/34)</li>
                  <li><strong>CVC:</strong> Any 3 digits (e.g. 123)</li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">
                  This is only for testing — no real payment will occur.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleBooking}
            disabled={isLoading}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700"
          >
            {isLoading ? "Processing..." : "Confirm Booking"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

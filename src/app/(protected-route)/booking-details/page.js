"use client";

//booking-details/page.js
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConfirmDeleteModal from "@/components/confirmDeleteModal";

export default function MyBookingsPage() {
  //all the state variables
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);


  //function to handle delete button click
   const handleDelete = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };
  const confirmDelete = () => async () => {
   if (!selectedBooking) return;
    try {
      const res = await fetch(`/api/bookings/deleteBookingDetails/${selectedBooking._id}`, {
        method: "DELETE",
      });
      console.log("delete response", res);
      if (res.ok) {
        setBookings((prevBookings) => prevBookings.filter((b) => b._id !== selectedBooking._id));
         setShowModal(false);
        setSelectedBooking(null);
        
      } else {
        console.error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  useEffect(() => {
    setLoading(true)
    const fetchBookings = async () => {
      if (!user) return;
      const res = await fetch(`/api/bookings/user/${user.id}`);
      const data = await res.json();
      console.log("user bookings data:", data);
      setBookings(data);
      setLoading(false);
    };
    fetchBookings();
  }, [user]);

  if (loading) return <p className="text-center mt-20">Loading your bookings...</p>;

  return (
    <div className="min-h-[50vh] bg-white pt-16 p-6 pb-10 mt-10 ">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
    <div>
        <p className="text-center text-[orangered]">You have no bookings yet.</p>
        <motion.div className="flex justify-center mt-6 mb-[-50px]"
        
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        >
          <Image
            src="/images/no-booking.png"
            alt="No Bookings"
            width={500}
            height={200}
            className="opacity-75"
          />
        </motion.div>
    </div>
        


      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-purple-700 pb-3">
                {booking.roomName}
              </h2>
              <p className="text-gray-800"><strong>Booking Ref:</strong> <span className="text-gray-700">{booking.bookingRef}</span></p>
              <p className="text-gray-800" ><strong>Status:</strong><span className="text-green-500 font-semibold">{booking.status}</span></p>
              <p className="text-gray-800"><strong>Check-In:</strong> <span className="text-gray-700">{booking.checkIn}</span></p>
              <p className="text-gray-800"><strong>Check-Out:</strong> <span className="text-gray-700"> {booking.checkOut}</span></p>
              <p className="text-gray-800"><strong>Guests:</strong> <span className="text-gray-700"> {booking.guests}</span></p>
              <p className="text-gray-800"><strong>Total:</strong> <span className="text-gray-700"> ${booking.totalPrice}</span></p>
               <button className="flex justify-end bg-[orangered] text-white mt-4 uppercase font-medium hover:opacity-90 p-1 px-2 rounded-lg"
               onClick={() => handleDelete(booking)}

               >delete</button>
            </div>
           
          ))}
         
        </div>
      )}
       <ConfirmDeleteModal
        showModal={showModal}
        roomName={selectedBooking?.roomName}
        onConfirm={confirmDelete()}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}

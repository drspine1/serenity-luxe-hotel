"use client";
import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async (search = "") => {
    setLoading(true);
    const res = await fetch(`/api/admin/bookings?q=${search}`);
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  const updateStatus = async (id, newStatus) => {
    const res = await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId: id, status: newStatus }),
    });
    if (res.ok) {
      fetchBookings(query);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10 mt-20">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Admin Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by booking ref or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-l-lg px-4 py-2 w-72 outline-none"
        />
        <button
          onClick={() => fetchBookings(query)}
          className="bg-purple-700 text-white px-6 py-2 rounded-r-lg hover:bg-purple-800"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-purple-700 text-white text-left">
                <th className="p-3">Booking Ref</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Room</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{b.bookingRef}</td>
                  <td className="p-3">{b.userName}</td>
                  <td className="p-3">{b.userEmail}</td>
                  <td className="p-3">{b.roomName}</td>
                  <td className="p-3">${b.totalPrice}</td>
                  <td className={`p-3 capitalize font-semibold ${b.status === "completed" ? "text-blue-600" : "text-green-600"}`}>{b.status}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => updateStatus(b._id, "checked-in")}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                    >
                      Check-In
                    </button>
                    <button
                      onClick={() => updateStatus(b._id, "completed")}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

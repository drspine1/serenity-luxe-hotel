"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#25003c] text-gray-300 pt-16 pb-8 mt-40 relative overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#36005a]/80 via-[#25003c]/90 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 z-10"
      >
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
            Luxe<span className="text-[orangered]">haven.</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Experience elegance, comfort, and tranquility — all in one place.
            Discover why LuxeHaven Hotel is the perfect escape for the modern traveler.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 bg-[#36005a] hover:bg-[orangered] text-white rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-[#36005a] hover:bg-[orangered] text-white rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-[#36005a] hover:bg-[orangered] text-white rounded-full transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-[#36005a] hover:bg-[orangered] text-white rounded-full transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[orangered] transition">Home</a></li>
            <li><a href="/rooms" className="hover:text-[orangered] transition">Rooms</a></li>
            <li><a href="/gallery" className="hover:text-[orangered] transition">Gallery</a></li>
            <li><a href="/dining" className="hover:text-[orangered] transition">Dining</a></li>
            <li><a href="/contact" className="hover:text-[orangered] transition">Contact</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-[orangered] mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-[orangered] transition">About Us</a></li>
            <li><a href="/amenities" className="hover:text-[orangered] transition">Amenities</a></li>
            <li><a href="/events" className="hover:text-[orangered] transition">Events</a></li>
            <li><a href="/careers" className="hover:text-[orangered] transition">Careers</a></li>
            <li><a href="/privacy" className="hover:text-[orangered] transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-4">
            Get exclusive updates, offers, and travel tips straight to your inbox.
          </p>
          <form className="flex flex-col  gap-3 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[orangered] text-white px-4 py-2 rounded-lg hover:bg-[#ff7b02] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="relative text-center text-sm text-gray-400 border-t border-gray-700 mt-10 pt-6 z-10">
        © {new Date().getFullYear()} LuxeHaven Hotel. All Rights Reserved.
      </div>
    </footer>
  );
}

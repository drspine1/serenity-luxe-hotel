"use client";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="relative h-screen bg-purple-900">
      
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-5 md:px-16">
        <h1 className="font-bold text-xl md:text-3xl uppercase tracking-wide text-gray-300">
          Delux<span className="text-amber-500">H</span>
        </h1>

        <div className="flex gap-4  items-center">
          <Link href="/sign-in">
            <button className="text-gray-300 hover:text-amber-500 transition font-medium">
              Sign In
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="bg-amber-500 text-white px-4 py-2 rounded-full rounded-full hover:bg-amber-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
            Welcome to <br />
            <span className="text-amber-500">DeluxHaven Hotel</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Experience a perfect balance of luxury, comfort, and nature.
            Sign in to manage your bookings or create an account to begin
            your journey with us.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/sign-up">
              <button className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition">
                Book Now
              </button>
            </Link>

            <Link href="/sign-in">
              <button className="border border-purple-500 text-gray-300 px-6 py-3 rounded-full hover:bg-purple-700 hover:text-white transition">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

    </BackgroundLines>
  );
}

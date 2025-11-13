"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" h-screen ">
         <nav className="flex justify-between items-center p-6 absolute top-0 left-0 w-full z-20 md:px-18">
          <h1 className="font-bold text-xl md:text-5xl text-amber-100 uppercase">delux.<span className="text-amber-800">h</span></h1>
              <div className="flex gap-2 md:gap-6 ">
        <Link href="/sign-in">
          <button className="text-white  hover:text-amber-800 transition-all duration-75 cursor-pointer">
            Sign In
          </button>
        </Link>

        <Link href="/sign-up">
          <button className="text-white  hover:text-amber-800 transition-all duration-75 cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
         </nav>
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-900 via-amber-700 to-green-500 opacity-70" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }} transition={{ duration: 10, repeat: "infinity", ease: "linear", }} style={{ backgroundSize: "200% 200%", }} />
     <div className="relative z-10 flex flex-col justify-center items-center h-screen  text-white text-center p-6">
       <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Delux<span className="text-amber-800">haven</span> Hotel </h1>
      <p className="max-w-xl text-lg text-gray-200 mb-10">
        Experience the perfect blend of luxury and nature. Sign in to explore your personalized dashboard or join us to start your next adventure.
      </p>

     
     </div>
    </section>
  );
}

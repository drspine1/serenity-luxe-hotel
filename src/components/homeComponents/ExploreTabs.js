"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"

const tabs = ["Dining", "Events & Adventures"];

export default function ExploreTabs() {
  const [activeTab, setActiveTab] = useState("Dining");

  return (
    <section className="py-20 bg-[hsl(0,0%,90%)] text-gray-800 mt-40">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#25003c] mb-10">
          Explore More With Us
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mt-8 ${
                activeTab === tab
                  ? "bg-[#e5a55d] text-white shadow-lg scale-105"
                  : "bg-[#25003c] text-white/70 hover:text-white hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "Dining" ? (
              <motion.div
                key="dining"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left space-y-4">
                    <h3 className="text-3xl font-bold text-[#36005a]">
                      Fine Dining Experience
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover our elegant restaurant offering both local and
                      international cuisines. Enjoy romantic dinners, morning
                      breakfasts, and rooftop experiences overlooking the
                      skyline.
                    </p>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Open 7am - 11pm daily</li>
                      <li>Signature cocktails and wine</li>
                      <li>Chef’s weekly special menu</li>
                    </ul>
                     <Link href="/menu">
                      <button className="mt-4 bg-[#ff7b02] text-white px-6 py-2 rounded-lg hover:bg-[#e5a55d] transition">
                      View Menu
                    </button>
                     </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <Image
                        src="/images/dinning.jpg"
                        alt="Dining area"
                        width={500}
                        height={400}
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/topdinner.jpg"
                        alt="Rooftop dinner"
                        width={500}
                        height={400}
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/chef.jpg"
                        alt="Chef special"
                        width={500}
                        height={400}
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/images/beach.jpg"
                      alt="Beach event"
                      width={500}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                    <Image
                      src="/images/hiking.jpg"
                      alt="Hiking adventure"
                      width={500}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                    <Image
                      src="/images/campfire.jpg"
                      alt="Bonfire night"
                      width={500}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                    <Image
                      src="/images/tour.jpg"
                      alt="Boat tour"
                      width={500}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                  </div>

                  <div className="text-left space-y-4">
                    <h3 className="text-3xl font-bold text-[#36005a]">
                      Events & Adventures
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      From beachside bonfires to mountain hikes, we organize
                      unforgettable activities for guests who crave both
                      relaxation and adventure.
                    </p>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Evening beach walks</li>
                      <li>Live music & cultural nights</li>
                      <li>Guided hiking and boat tours</li>
                    </ul>
                    <button className="mt-4 bg-[#ff7b02] text-white px-6 py-2 rounded-lg hover:bg-[#e5a55d] transition">
                      Book an Experience
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

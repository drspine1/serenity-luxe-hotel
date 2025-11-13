"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    async function fetchMenu() {
      setLoading(true);
      try {
        const query =
          activeCategory === "All"
            ? "restaurant food"
            : `${activeCategory.toLowerCase()} food`;
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=${accessKey}`
        );
        const data = await res.json();
        setMenuItems(data.results || []);
      } catch (error) {
        console.error("Error fetching menu images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, [activeCategory, accessKey]);

  return (
    <main>
       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/chef.jpg" // 🪶 Replace with your own background image
        alt="Hotel restaurant background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          Our Exquisite Menu
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Savor the taste of luxury — from fresh, locally sourced ingredients to gourmet dishes crafted by our chefs.
        </p>
        <div className="mt-8">
          <a
            href="#menu-section"
            className="bg-[orangered] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            Explore Menu
          </a>
        </div>
      </div>

      {/* Subtle wave overlay for style */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C187.09,85.31,70.29,76.43,0,66.33V120H1200V0C1071.26,52.57,831.41,101.25,621.39,75.85,498.6,60.84,393.7,41.85,321.39,56.44Z"
            className="fill-[#25003c]"
          ></path>
        </svg>
      </div>
    </section>


    <section id="menu-section" className="min-h-screen bg-[hsl(0,0%,90%)] text-gray-800 py-20 px-6 mt-40">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold text-[#25003c] mb-6"
        >
          Our Exquisite Menu
        </motion.h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Experience fine dining with dishes tailored to satisfy every craving.
          Select a category to explore our specialties.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border 
                ${
                  activeCategory === cat
                    ? "bg-[#36005a] text-white border-[#36005a]"
                    : "bg-white text-[#25003c] border-[#36005a] hover:bg-[#36005a]/10"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        {loading ? (
          <p className="text-gray-500 animate-pulse">Loading {activeCategory} menu...</p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative group rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.urls.small}
                  alt={item.alt_description || "Menu item"}
                  width={400}
                  height={10}
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-[#25003c]/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-sm md:text-lg ">
                    {item.alt_description
                      ? item.alt_description.slice(0, 40)
                      : "Chef’s Special"}
                  </h3>
                  <p className="text-[#e5a55d] font-bold mt-1">
                    ${Math.floor(Math.random() * 50) + 20}.00
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
    </main>
    
  );
}

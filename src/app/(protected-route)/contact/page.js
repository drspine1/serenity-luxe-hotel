"use client";
import { motion } from "framer-motion";

export default function ContactPage(){
    return (
    <div className="contact-container min-h-screen bg-gradient-to-b from-[#2b0049] to-[#12001f] text-white py-[10rem] -mb-40"
    
    >
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[white] capitalize"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[#d3c8e3] mt-4 text-base md:text-lg"
        >
          We’d love to hear from you — whether it’s a question, feedback, or a
          special request.
        </motion.p>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-16 gap-[8%] pb-24">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex-[100%] md:flex-[50%] bg-white/10 backdrop-blur-md  rounded-xl p-6 md:p-8 text-left shadow-lg w-full"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-md bg-[#ffffff]/90 text-black outline-none  transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-[#ffffff]/90 text-black outline-none  transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                className="w-full p-3 min-h-40 rounded-md bg-[#ffffff]/90 text-black outline-none  transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 text-lg font-semibold rounded-md bg-[orangered] text-white hover:opacity-80 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex-[40%] mt-30 md:mt-0 text-left "
          >
            <h4 className="text-2xl font-semibold mb-4 text-[white]]">
              Get in Touch
            </h4>
            <p className="text-[#d3c8e3] mb-6">
              You can also reach out to us through any of the following ways:
            </p>

            <ul className="space-y-3 text-[#e3dced]">
              <li>
                <strong className="text-[white]">Phone:</strong> +1 (123)
                456-7890
              </li>
              <li>
                <strong className="text-[white]">Email:</strong>{" "}
                info@luxehaven.com
              </li>
              <li>
                <strong className="text-[white]">Address:</strong> 123 Delux
                St, Paradise City, CA 90210
              </li>
            </ul>

            <h5 className="text-xl font-semibold mt-8 mb-3 text-[white]">
              Follow Us
            </h5>
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://facebook.com/luxehaven"
                  className="text-[#ff7b02] hover:underline hover:text-white transition-all"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/luxehaven"
                  className="text-[#ff7b02] hover:underline hover:text-white transition-all"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/luxehaven"
                  className="text-[#ff7b02] hover:underline hover:text-white transition-all"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

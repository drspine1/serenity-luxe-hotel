"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "What time is check-in & check-out?", a: "Check-in is from 3:00 PM. Check-out is by 11:00 AM. Early check-in/late check-out upon request." },
  { q: "Do you offer airport transfers?", a: "Yes — airport pickup is available. Contact concierge to arrange." },
  { q: "Is breakfast included?", a: "Some rates include breakfast — check your booking details or add during checkout." },
  { q: "Do you accept pets?", a: "We are a pet-friendly hotel in designated rooms. Please contact reservations for details." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-[#36005a] mb-6 text-center">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-4 rounded-lg border flex justify-between items-center bg-[#f8f5fc]">
                <div>
                  <div className="font-semibold text-[#25003c]">{f.q}</div>
                  {open === i && <div className="text-gray-600 mt-2">{f.a}</div>}
                </div>
                <div className="text-[#36005a] font-bold">{open === i ? "-" : "+"}</div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

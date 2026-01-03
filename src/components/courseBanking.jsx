import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bankingSections = [
  {
    title: "→ IBPS Exams",
    content: [
      "PO (Probationary Officer) – Prelims + Mains + Interview training",
      "Clerk – Speed and Accuracy-focused sessions",
      "SO (Specialist Officer) – Domain-specific prep (IT, HR, Marketing)",
      "RRB – Tailored coaching for Regional Rural Bank PO & Clerk",
    ],
  },
  {
    title: "→ SBI Exams",
    content: [
      "SBI PO – High-level reasoning, DI & GD/PI training",
      "SBI Clerk – Fast-track course for Prelims & Mains",
      "SBI SO – Specialist streams with previous year patterns",
    ],
  },
  {
    title: "→ Other Banking & Insurance",
    content: [
      "RBI Grade B – Phase 1, 2 and Interview with Economics & Finance modules",
      "NABARD – Agriculture & Rural Development focused guidance",
      "Insurance (LIC/NICL) – AO, AAO with full test series and strategy",
    ],
  },
];

export default function CourseBanking() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-300 py-16 px-6 text-center mt-2">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Banking & Finance Exam Courses
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100">
          IBPS, SBI, RBI, NABARD, LIC and more — get comprehensive coaching for
          all major banking exams.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        {/* Accordion Section */}
        <div className="space-y-4">
          {bankingSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-300 rounded-lg overflow-hidden"
              layout
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left py-4 px-4 font-semibold text-lg flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index ? "text-blue-700" : "text-gray-800"
                }`}
              >
                {section.title}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold"
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="list-disc list-inside space-y-1"
                    >
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Course Image/Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <motion.div
            className="w-full h-60"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?q=80&w=1200&auto=format&fit=crop"
              alt="Banking Exam Preparation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Master Banking Exams
            </h3>
            <p className="text-gray-700 mb-4">
              Industry-standard coaching for IBPS, SBI, RBI, and insurance
              exams. Updated content with live classes, mocks, and bilingual
              options.
            </p>
            <span className="inline-block bg-yellow-300 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
              All Levels
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

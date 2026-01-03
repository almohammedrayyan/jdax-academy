import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const freeClasses = [
  {
    title: "Introduction to UPSC/TNPSC/Banking",
    content:
      "This course introduces you to the basics of UPSC, TNPSC, and Banking exams. Get an overview, exam patterns, and essential tips to get started.",
  },
  {
    title: "Sample Video Lectures",
    content:
      "Watch sample video lectures covering important topics to get a feel for the teaching style and course structure.",
  },
  {
    title: "Exam Strategy Webinars",
    content:
      "Participate in webinars that discuss exam strategies, time management, and how to approach different sections effectively.",
  },
  {
    title: "Free Demo Classes (Recorded)",
    content:
      "Access recorded demo classes to see detailed explanations and study techniques from expert instructors.",
  },
];

export default function FreeClasses() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Top Banner */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-16 px-6 text-center mt-2">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Free Classes
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          A comprehensive guide for India’s premier examination – tailored for
          serious aspirants.
        </p>
      </section>

      {/* Main content area */}
      <div className="flex max-w-7xl mx-auto py-16 px-6 md:px-12 gap-8 flex-grow">
        {/* Left list */}
        <motion.ul
          layout
          className={`space-y-8 transition-all duration-500 ${
            selectedIndex !== null ? "w-2/3" : "w-full"
          }`}
        >
          {freeClasses.map((item, index) => (
            <motion.li
              key={index}
              layout
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex items-center bg-gray-50 p-6 rounded-lg shadow-sm cursor-pointer select-none
                ${
                  selectedIndex === index
                    ? "bg-blue-100 shadow-md"
                    : "hover:shadow-md hover:bg-gray-100"
                }
              `}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full mr-6
                ${
                  index % 2 === 0
                    ? "bg-blue-500 animate-pulse"
                    : "bg-purple-500 animate-bounce"
                }
                `}
              ></span>
              <span className="text-gray-800 font-semibold text-lg">
                {item.title}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right panel */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              key="right-panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="w-1/3 bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {freeClasses[selectedIndex].title}
                </h3>
                <p className="text-gray-700">
                  {freeClasses[selectedIndex].content}
                </p>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="mt-8 self-end px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                aria-label="Close details panel"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

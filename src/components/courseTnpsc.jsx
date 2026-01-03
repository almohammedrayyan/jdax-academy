import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tnpsc from "../components/tnpscContent/tnpsc";
import TnpscCourseCo from "./tnpscContent/tnpscCouseCo";
export default function CourseTnpsc() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "→ NEW TO TNPSC? START HERE",
      file: <Tnpsc />,
    },
    {
      title: "→ TNPSC GROUP PROGRAMMES",
      file: <TnpscCourseCo />,
    },
  ];

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
          TNPSC Exam Programs
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100">
          Structured programs for Group 1, 2, 2A & Group 4 with bilingual
          options and expert support.
        </p>
      </section>

      {/* Course Section */}
      {/* Course Section */}
      <div className="space-y-4" style={{ margin: "40px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden bg-white"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-gray-100 transition"
            >
              <span>
                <span className="font-bold"></span> {item.title}
              </span>

              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-fit p-6" : "max-h-0 p-0"
              } overflow-hidden`}
            >
              {item.file}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

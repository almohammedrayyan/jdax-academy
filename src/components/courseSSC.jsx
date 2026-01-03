import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SscCourse from "./sscContent/sscCourse";
import RiseToServeIntegrated from "./sscContent/RiseToServeIntegrated";

const sscSections = [
  {
    title: "→ SSC CGL (Combined Graduate Level)",
    content: [
      "Tier 1: Preliminary exam preparation",
      "Tier 2: Mains exam detailed syllabus",
      "Tier 3: Descriptive paper guidance",
      "Tier 4: Skill test/document verification",
    ],
  },
  {
    title: "→ SSC CHSL (Higher Secondary)",
    content: [
      "Tier 1: Objective exam strategy",
      "Tier 2: Descriptive paper tips and practice",
      "Skill tests for various posts",
    ],
  },
  {
    title: "→ SSC MTS (Multi-Tasking Staff)",
    content: [
      "Paper 1: General English, reasoning, and general awareness",
      "Paper 2: Descriptive paper preparation",
      "Physical efficiency test insights",
    ],
  },
];

export default function CourseSSC() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "→ SSC, Banking, Railways and Other Regulatory Bodies Exams",
      file: <SscCourse />, // your component
    },
    {
      title:
        "→ RISE TO SERVE INTEGRATED BATCH: For SSC, Banking, Railways & Other Regulatory Bodies",
      file: <RiseToServeIntegrated />, // your component
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-16 px-6 text-center mt-2">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          SSC Exam Courses
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Complete guidance for SSC CGL, CHSL, and MTS exams with structured
          content and expert mentoring.
        </p>
      </section>

      {/* Main Content */}
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
                <span className="font-bold">→</span> {item.title}
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

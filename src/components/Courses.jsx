import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const courses = [
  {
    title: "UPSC Civil Services",
    desc: "Comprehensive coaching with structured curriculum, current affairs, test series, and personalized mentoring.",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
    level: "Advanced",
    syllabus: ["Polity", "Economy", "Geography", "History", "Current Affairs"],
  },
  {
    title: "TNPSC Exams",
    desc: "Specialized courses for TNPSC Group 1, 2, and 4 exams with Tamil Nadu state-specific focus.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    level: "Intermediate",
    syllabus: [
      "General Studies",
      "Aptitude",
      "Tamil Language",
      "Current Affairs",
    ],
  },
  {
    title: "RRB / SSC",
    desc: "Complete coverage for RRB NTPC, SSC CGL, CHSL, and other competitive exams with mock tests.",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
    level: "Beginner to Advanced",
    syllabus: ["Maths", "Reasoning", "General Awareness", "English"],
  },
  {
    title: "SSB Interview Prep",
    desc: "Mentorship-driven program to help you crack SSB interviews with confidence, psychology tests & GTO training.",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200&auto=format&fit=crop",
    level: "Specialized",
    syllabus: ["Psychology Tests", "GTO Tasks", "Personal Interview"],
  },
];

export default function Courses() {
  const [activeIndex, setActiveIndex] = useState(0); // default first course

  return (
    <>
      <div className="bg-white text-gray-800 min-h-screen">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#facc15] text-white py-16 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore Our Courses
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Designed for aspirants who dream big — UPSC, TNPSC, RRB, SSC, and
            SSB guidance under one roof.
          </p>
        </section>

        {/* Accordion + Course Details */}
        <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
          {/* Left Accordion */}
          <div>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-b border-gray-300"
              >
                <button
                  className={`w-full text-left py-4 px-4 font-semibold text-lg flex justify-between items-center ${
                    activeIndex === index ? "text-blue-700" : "text-gray-800"
                  }`}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {course.title}
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>

                {/* Expandable Syllabus */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <ul className="list-disc list-inside space-y-1">
                      {course.syllabus.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                    <button className="mt-3 bg-yellow-400 text-blue-900 font-medium px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
                      View Syllabus
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Course Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={courses[activeIndex]?.img}
              alt={courses[activeIndex]?.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {courses[activeIndex]?.title}
              </h3>
              <p className="text-gray-700 mb-4">{courses[activeIndex]?.desc}</p>
              <span className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                {courses[activeIndex]?.level}
              </span>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

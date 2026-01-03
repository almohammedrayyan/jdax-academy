import React, { useState } from "react";
import { motion } from "framer-motion";
import UpscNew from "./upscContent/upscNew";
import UpscCourse from "./upscContent/UpscCourse";
import Peadology from "./upscContent/peadalogy";
import PeadalogyMain from "./upscContent/peadalogyMain";

export default function CourseUpscAccordion() {
  const [activeTab, setActiveTab] = useState("services");

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
          UPSC Civil Services Course
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          A comprehensive guide for India’s premier examination – tailored for
          serious aspirants.
        </p>
      </section>

      {/* TABS */}
      {/* <div className="flex justify-center mt-10">
        <div className="w-full max-w-5xl flex items-center justify-between gap-4">
          <button
            onClick={() => setActiveTab("services")}
            className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl border bg-white shadow-sm transition
        ${
          activeTab === "services"
            ? "border-[#431aa0] bg-gray-100"
            : "hover:bg-gray-100"
        }
      `}
          >
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              → UPSC Service
            </span>
            <span className="text-2xl font-bold text-gray-600">+</span>
          </button>

          <button
            onClick={() => setActiveTab("course")}
            className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl border bg-white shadow-sm transition
        ${
          activeTab === "course"
            ? "border-[#431aa0] bg-gray-100"
            : "hover:bg-gray-100"
        }
      `}
          >
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              → UPSC Course
            </span>
            <span className="text-2xl font-bold text-gray-600">+</span>
          </button>

          <button
            onClick={() => setActiveTab("pedagogy")}
            className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl border bg-white shadow-sm transition
        ${
          activeTab === "pedagogy"
            ? "border-[#431aa0] bg-gray-100"
            : "hover:bg-gray-100"
        }
      `}
          >
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              → Pedagogy
            </span>
            <span className="text-2xl font-bold text-gray-600">+</span>
          </button>
        </div>
      </div> */}

      {/* TAB CONTENT */}
      <div className="mt-10 px-2 md:px-20" style={{ padding: "0px" }}>
        <UpscNew />
        {/* {activeTab === "course" && <UpscCourse />}
        {activeTab === "pedagogy" && <PeadalogyMain />} */}
      </div>
    </div>
  );
}

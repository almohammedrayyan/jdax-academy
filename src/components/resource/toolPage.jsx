import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUserGraduate,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  {
    name: "Study Planner",
    icon: <FaBook className="text-4xl text-blue-500" />,
  },
  {
    name: "Exam Date Tracker",
    icon: <FaCalendarAlt className="text-4xl text-green-500" />,
  },
  {
    name: "Syllabus Completion Tracker",
    icon: <FaClipboardCheck className="text-4xl text-yellow-500" />,
  },
  {
    name: "UPSC Tools",
    icon: <FaUserGraduate className="text-4xl text-purple-500" />,
  },
  {
    name: "TNPSC Tools",
    icon: <FaUniversity className="text-4xl text-pink-500" />,
  },
  {
    name: "BANKING, SSC Tools",
    icon: <FaBriefcase className="text-4xl text-red-500" />,
  },
];

const ToolPages = () => {
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {tools.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center cursor-pointer 
                       transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 animate-bounce">{icon}</div>
              <p className="text-xl font-semibold text-gray-700 text-center">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolPages;

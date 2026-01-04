import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import santhomeImg from "../assets/santhome.png";

export default function Hero() {
  return (
    <section className="relative bg-white py-16 sm:py-24 2xl:py-40 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] grid lg:grid-cols-2 gap-12 2xl:gap-24 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-bold leading-tight"
          >
            <span className="block text-xl sm:text-3xl lg:text-4xl text-[#431aa0]">
              WELCOME TO
            </span>

            <span className="block text-yellow-400 text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
              JD Academy of eXcellence{" "}
              <span className="text-[#431aa0]">JDAX</span>
            </span>

            <p className="mt-3 text-sm sm:text-base text-gray-700">
              We believe in the transformative journey of every aspirant
            </p>
          </motion.h1>

          {/* IMAGE + TEXT */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 max-w-2xl mx-auto lg:mx-0">
            <img
              src={santhomeImg}
              alt="Santhome Cathedral"
              className="w-28 h-28 sm:w-36 sm:h-36 2xl:w-44 2xl:h-44 object-cover rounded-md"
            />

            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-base 2xl:text-lg text-gray-900 text-center sm:text-left"
            >
              Located in the heart of Santhome near the iconic Santhome
              Cathedral, Chennai, JDAX Academy is a unique academic unit
              initiated by the Archdiocese of Madras-Mylapore.
            </motion.p>
          </div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-6"
          >
            <Link
              to="/course-comparison"
              className="px-8 py-4 bg-[#431aa0] text-white font-semibold rounded-lg shadow-md hover:bg-[#2f0e7a] transition-all text-center"
            >
              Compare All Exams
            </Link>

            <Link
              to="/course-finder"
              className="px-8 py-4 border-2 border-[#431aa0] text-[#431aa0] font-semibold rounded-lg hover:bg-[#431aa0] hover:text-white transition-all text-center"
            >
              Which Exams Fits You?
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative space-y-5"
        >
          <motion.div
            className="rounded-xl shadow-xl overflow-hidden w-full h-56 sm:h-72 md:h-80 lg:h-[420px] 2xl:h-[520px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aGQqcuiTCt4?autoplay=1&rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="JDAX Intro"
            />
          </motion.div>

          <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            Join structured programs for UPSC, TNPSC, RRB, and SSB exams with
            top mentors and curated resources.
          </p>
        </motion.div>
      </div>

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-200 to-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-full blur-3xl opacity-30" />
    </section>
  );
}

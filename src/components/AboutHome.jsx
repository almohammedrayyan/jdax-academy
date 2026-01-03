import React from "react";
import { motion } from "framer-motion";
import img from "../assets/jdax-1.jpg";

const AboutHome = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-[#0f398f] mb-4">
              About Jdax
            </h2>
            <p className="text-gray-700 leading-relaxed">
              JD Academy of Excellence, popularly known as JDAX, is a unique
              academic unit, initiated by the Archdiocese of Madras-Mylapore,
              committed to educate, empower, and shape the personalities of
              young men and women towards their pursuit of leadership
              excellence. It has its main centre at Santhome, near the iconic
              Santhome Cathedral, Chennai. It primarily focuses on providing
              learning opportunities to all young aspirants to become leaders in
              their respective ﬁelds and serve the nation as agents of social
              change.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={img}
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHome;

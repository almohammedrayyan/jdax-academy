import React, { useState } from "react";
import { motion } from "framer-motion";
import peerImage from "../../assets/33.png";
import mentorImage from "../../assets/39.png";
const WhyChooseJdax1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whyJdaxPoints = [
    "India's first institute to implement incremental syllabus approach",
    "Only institute in India integrating mindfulness techniques into education",
    "Pioneering the 5E Teaching Model for competitive exam preparation",
    "Democratizing access to quality civil services preparation",
    "Comprehensive character development through diverse activities",
    "Expert faculty from universities and industries",
    "Modern infrastructure with ICT-enabled classrooms",
    "Holistic approach combining academics with personal development",
    "Strong mentorship program with cognitive-behavioral techniques",
    "Regular assessment and feedback for continuous improvement",
  ];

  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center"
          >
            Why Choose JDAX Academy?
          </motion.h2>

          {/* Accordion */}
          <div className="space-y-4">
            {whyJdaxPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-300 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  {/* Text */}
                  <span className="flex-1 text-center text-lg md:text-xl font-medium text-blue-800">
                    {point}
                  </span>

                  {/* Icon */}
                  <span className="ml-4 text-2xl font-bold text-blue-800">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Student Support & Mentorship
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.img
              src={mentorImage}
              alt="1-on-1 Mentorship"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-md object-cover"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
              1-on-1 Mentorship
            </h3>

            <p className="text-sm sm:text-base text-gray-700 max-w-sm">
              Personalized sessions to guide, motivate, and track progress.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.img
              src={peerImage}
              alt="Peer Learning Groups"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-md object-cover"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
              Peer Learning Groups
            </h3>

            <p className="text-sm sm:text-base text-gray-700 max-w-sm">
              Small focused groups to foster collaborative learning and
              discipline.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseJdax1;

import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from "../../testimonial.json";
// Sample student journeys
const journeys = [
  {
    name: "Ravi Kumar",
    before:
      "Struggled with scattered notes and no fixed study schedule. Felt overwhelmed by the UPSC syllabus.",
    after:
      "Created a daily planner using our tools and completed syllabus 3 weeks early. Secured AIR 42.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Anjali Sharma",
    before:
      "Lost track of TNPSC exam dates and missed important mock tests due to lack of planning.",
    after:
      "Used Exam Tracker to stay updated and completed 10+ mock tests. Cleared TNPSC Group 1 in first attempt.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Mohammed Zaid",
    before:
      "Was unsure how to manage SSC preparation with a full-time job. Had no way to track progress.",
    after:
      "Used Syllabus Completion Tracker to break the syllabus into milestones. Cracked SSC CGL while working.",
    image: "https://i.pravatar.cc/150?img=33",
  },
];
const sliderSettings = {
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4, // Desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 }, // Mobile
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }, // Mobile
    },
  ],
};
const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col"
    >
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold">
          {item.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p className="text-sm text-purple-600">{item.role}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md flex-grow flex flex-col">
        <div
          className={`text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-3 transition-all duration-300 ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {item.text}
        </div>

        {/* More / Less – ALWAYS visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm font-semibold text-green-700 hover:underline self-start"
        >
          {expanded ? "Less ▲" : "More ▼"}
        </button>
      </div>
    </motion.div>
  );
};

const StudentJourney = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#facc15]"
        >
          Student Voices
        </motion.h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-center">
          Real experiences from TNPSC & UPSC aspirants at JDAX
        </p>
      </section>

      {/* Slider */}
      <section className="py-14 px-6 lg:px-20 bg-gray-50">
        <Slider {...sliderSettings}>
          {testimonial.map((item, index) => (
            <div key={index} className="px-3 h-full">
              <TestimonialCard item={item} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default StudentJourney;

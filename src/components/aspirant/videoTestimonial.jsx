import React from "react";
import { motion } from "framer-motion";

// Sample video testimonials
const testimonials = [
  {
    name: "Ravi Kumar",
    caption: "Cleared UPSC with AIR 42 - Thanks to consistent planning!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Anjali Sharma",
    caption: "Study Planner helped me crack TNPSC Group 1!",
    videoUrl: "https://www.youtube.com/embed/3tmd-ClpJxA",
  },
  {
    name: "Mohammed Zaid",
    caption: "Syllabus Tracker kept me on point throughout SSC prep.",
    videoUrl: "https://www.youtube.com/embed/lTTajzrSkCw",
  },
  {
    name: "Priya Sen",
    caption: "Banking prep became smoother with the tools here!",
    videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
  },
];

const VideoTestimonial = () => {
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
          Video Testimonial
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Hear from students who used our tools to crack their exams.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-6 lg:px-20 bg-gray-50 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={testimonial.videoUrl}
                  title={`Testimonial by ${testimonial.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">{testimonial.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoTestimonial;

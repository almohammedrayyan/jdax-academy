// src/pages/YouTube.jsx
import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./Header";
import Footer from "./Footer";

const videos = [
  {
    id: "1",
    title: "UPSC Preparation Strategy",
    url: "https://www.youtube.com/embed/4UZrsTqkcW4", // Example video
  },
  {
    id: "2",
    title: "How to Crack TNPSC Exams",
    url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
  },
  {
    id: "3",
    title: "RRB & SSC Preparation Tips",
    url: "https://www.youtube.com/embed/rA9zm3-TcTA",
  },
  {
    id: "4",
    title: "SSB Interview Guidance",
    url: "https://www.youtube.com/embed/zpOULjyy-n8",
  },
];

export default function YouTube() {
  return (
    <>
      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#1e3a8a] via-[#0f172a] to-[#facc15] text-white py-20 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Learn Through Video Lessons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          >
            Explore expert-led classes, exam tips, and motivational sessions on
            our official YouTube channel.
          </motion.p>
        </section>

        {/* Video Carousel */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-blue-900 text-center mb-12"
          >
            Featured Videos
          </motion.h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="max-w-5xl mx-auto"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative w-full h-80">
                    <iframe
                      className="w-full h-full"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-blue-900">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-r from-yellow-400 via-blue-700 to-blue-900 text-white py-20 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Subscribe to Our Channel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl mx-auto mb-6"
          >
            Get notified about the latest lectures, exam strategies, and free
            study content.
          </motion.p>
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Subscribe Now
          </motion.a>
        </section>
      </div>
    </>
  );
}

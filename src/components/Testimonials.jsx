// src/pages/Testimonial.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "UPSC Aspirant",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The guidance and mentorship I received here were game-changing. The test series helped me understand my weak areas, and the personal mentorship kept me motivated.",
  },
  {
    id: 2,
    name: "Anita Sharma",
    role: "TNPSC Topper",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The structured approach and study material were amazing. I loved the current affairs sessions and interview prep modules — they built my confidence a lot!",
  },
  {
    id: 3,
    name: "Rajesh Singh",
    role: "RRB Qualified",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "From online classes to mock tests, everything was spot on. The team truly cares about students and works hard to help us achieve our dreams.",
  },
];

export default function Testimonial() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900">
        {/* Section Header */}
        <section className="py-16 px-6 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          >
            What Our Students Say
          </motion.h2>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="max-w-4xl mx-auto"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-400 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                  <p className="text-gray-700 mb-6 italic">“{t.feedback}”</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 rounded-lg bg-yellow-400 text-blue-900 font-semibold shadow-md hover:bg-yellow-500 transition"
                  >
                    Read More
                  </motion.a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}

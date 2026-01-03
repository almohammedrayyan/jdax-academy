import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

// Animation settings
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1], // realistic "easeOut" curve
    },
  },
};

export default function Blog() {
  const blogs = [
    {
      title: "How to Start UPSC Prep",
      date: "Sept 2025",
      image: "https://source.unsplash.com/400x300/?upsc,study",
      excerpt:
        "Learn how to kickstart your UPSC preparation journey with the right mindset, resources, and a 3-phase strategy.",
    },
    {
      title: "Daily Current Affairs Strategy",
      date: "Sept 2025",
      image: "https://source.unsplash.com/400x300/?currentaffairs,news",
      excerpt:
        "Master daily current affairs with a routine that actually sticks. Here's how toppers do it differently.",
    },
    {
      title: "Time Management for Exams",
      date: "Sept 2025",
      image: "https://source.unsplash.com/400x300/?time,management",
      excerpt:
        "Balance your study schedule, revision, and practice with this actionable time management guide.",
    },
  ];

  return (
    <>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        {/* Top Banner */}
        <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-16 px-6 text-center mt-2">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Blog Content
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-12">
            Explore our latest insights and tips to boost your exam
            preparations.
          </p>
        </section>
        <section id="blog" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center text-midnight mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              From Our Blog
            </motion.h2>

            <motion.div
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {blogs.map((b, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-sm overflow-hidden transition"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{b.date}</p>
                      <h3 className="font-semibold text-lg text-midnight mb-2">
                        {b.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{b.excerpt}</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-yellow-500 font-medium underline-offset-2 hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

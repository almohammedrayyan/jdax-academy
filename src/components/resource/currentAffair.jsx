import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const upscSections = [
  {
    title: "→ Daily Current Affairs (Updated daily!)",
    content: [
      "Stay updated with the latest daily current affairs essential for UPSC preparation.",
      "Includes national, international, economic, and environmental news.",
    ],
    key: "daily",
  },
  {
    title: "→ Monthly Magazine (PDF download)",
    content: [
      "Comprehensive monthly PDF magazines compiling all important events.",
      "Easy to download and read offline for revision.",
    ],
    key: "monthly",
  },
  {
    title: "→ Weekly Quiz",
    content: [
      "Test your knowledge with weekly quizzes based on recent current affairs.",
      "Instant feedback and explanations provided.",
    ],
    key: "weekly",
  },
  {
    title: "→ Current Affairs for [Each Exam]",
    content: [
      "Targeted current affairs for different UPSC exams including Prelims, Mains, and State Services.",
      "Tailored materials to focus your preparation effectively.",
    ],
    key: "exam",
  },
];

const contentDetails = {
  daily: {
    heading: "Daily Current Affairs",
    description:
      "Stay on top of your UPSC prep with daily news updates curated from reliable sources.",
    extra: (
      <a
        href="https://www.example.com/daily-updates"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Visit Daily Current Affairs Portal
      </a>
    ),
  },
  monthly: {
    heading: "Monthly Magazine",
    description:
      "Download comprehensive monthly magazines covering all important news for UPSC preparation.",
    extra: (
      <a
        href="https://www.example.com/monthly-magazine.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Download PDF
      </a>
    ),
  },
  weekly: {
    heading: "Weekly Quiz",
    description:
      "Challenge yourself with weekly quizzes based on current affairs and boost your exam readiness.",
    extra: (
      <a
        href="https://www.example.com/weekly-quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Take the Quiz Now
      </a>
    ),
  },
  exam: {
    heading: "Current Affairs for Each Exam",
    description:
      "Access tailored current affairs content specifically designed for Prelims, Mains, and other exams.",
    extra: (
      <a
        href="https://www.example.com/exam-specific-content"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Explore Exam Specific Content
      </a>
    ),
  },
};

const accordionVariants = {
  collapsed: { opacity: 0, height: 0, overflow: "hidden" },
  open: { opacity: 1, height: "auto", overflow: "visible" },
};

const contentVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.2 } },
};

const CurrentAffair = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const activeKey = upscSections[activeIndex]?.key;

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-300 py-12 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          🎓 Current affairs
        </motion.h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-100">
          Explore UPSC prep content — from beginner to optional subjects — all
          under one roof.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        {/* Left Accordion */}
        <div className="space-y-4">
          {upscSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-300 rounded-lg overflow-hidden"
              layout
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left py-4 px-4 font-semibold text-lg flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index ? "text-blue-700" : "text-gray-800"
                }`}
              >
                {section.title}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold"
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={accordionVariants}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="list-disc list-inside space-y-1"
                    >
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Dynamic Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[260px]">
          <AnimatePresence mode="wait" initial={false}>
            {activeKey && (
              <motion.div
                key={activeKey}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-gray-700"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {contentDetails[activeKey].heading}
                </h3>
                <p className="mb-4">{contentDetails[activeKey].description}</p>
                <div>{contentDetails[activeKey].extra}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default CurrentAffair;

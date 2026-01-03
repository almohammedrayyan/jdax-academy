import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
const cards = [
  {
    id: "comparison",
    title: "Course Comparison",
    description: "Search and find the perfect course tailored to your needs.",
    icon: <Shuffle className="w-10 h-10 text-yellow-300" />,
  },
  {
    id: "finder",
    title: "Quiz Finder",
    description: "Compare courses side-by-side to make informed decisions.",
    icon: <MdQuiz className="w-10 h-10 text-yellow-300" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.5 } },
};

const CallTo = () => {
  return (
    <div className=" text-gray-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-300 py-12 px-4 mt-3 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          🎓 Call To Action
        </motion.h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-100 mb-10">
          Touch with and let me know that
        </p>

        {/* Cards container */}
        <AnimatePresence>
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {cards.map(({ id, title, description, icon }) => {
              // Define route path for each card
              const path =
                id === "finder" ? "/course-finder" : "/course-comparison";

              return (
                <motion.div
                  key={id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="max-w-sm mx-auto"
                >
                  <Link
                    to={path}
                    className="block bg-[#131a2b] rounded-lg p-8 shadow-lg flex flex-col items-center text-center text-yellow-300 hover:bg-yellow-500 hover:text-[#0d1117] transition-colors duration-300"
                  >
                    <div className="mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default CallTo;

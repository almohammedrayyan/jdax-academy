import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  Zap,
  Shield,
} from "lucide-react";

export default function CSATOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="overview" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-gradient-to-br from-white to-orange-50 shadow-[0_10px_40px_rgba(251,146,60,0.3)] border-4 border-orange-400"
      >
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 border-b-4 border-orange-700">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center uppercase tracking-wider flex items-center justify-center gap-4">
            <Shield className="w-12 h-12" />
            <span>CRITICAL: What is CSAT?</span>
            <Shield className="w-12 h-12" />
          </h2>
        </div>

        <div className="p-8 md:p-12">
          {/* QUALIFYING PAPER Reality */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-1 mb-8 shadow-xl">
            <div className="bg-gradient-to-br from-red-50 to-white p-6">
              <div className="flex items-start gap-4 mb-6 pb-4 border-b-4 border-red-300">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0" />
                </motion.div>
                <h3 className="text-3xl font-black text-red-900 uppercase tracking-wide">
                  QUALIFYING PAPER - Reality
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-lg">
                <motion.div
                  className="bg-green-100 border-l-8 border-green-600 p-4 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-7 h-7 text-green-700 flex-shrink-0 mt-1" />
                    <p className="font-bold text-green-900">
                      Score 33%+ (66 marks) ={" "}
                      <span className="text-2xl">QUALIFIED ✓</span>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-red-100 border-l-8 border-red-600 p-4 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="w-7 h-7 text-red-700 flex-shrink-0 mt-1" />
                    <p className="font-bold text-red-900">
                      Below 33% = <span className="text-2xl">GAME OVER ✗</span>
                      <br />
                      <span className="text-sm">
                        (Even with 190/200 in Paper 1!)
                      </span>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-blue-100 border-l-8 border-blue-600 p-4 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <Target className="w-7 h-7 text-blue-700 flex-shrink-0 mt-1" />
                    <p className="font-bold text-blue-900">
                      Marks DON&apos;T count for merit
                      <br />
                      <span className="text-sm">(66 = 200 for ranking)</span>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-amber-100 border-l-8 border-amber-600 p-4 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <Zap className="w-7 h-7 text-amber-700 flex-shrink-0 mt-1" />
                    <p className="font-bold text-amber-900">
                      Safe Target: <span className="text-3xl">75-80</span>
                      <br />
                      <span className="text-sm">
                        (Buffer for negative marking)
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 80-20 Rule */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
              <div className="text-center mb-8 pb-6 border-b-4 border-orange-400">
                <h3 className="text-4xl font-black text-orange-900 uppercase tracking-widest mb-3 flex items-center justify-center gap-3">
                  <Zap className="w-10 h-10" />
                  80-20 Rule: Focus Here!
                  <Zap className="w-10 h-10" />
                </h3>
                <p className="text-xl font-bold text-orange-800">
                  80% marks from 20% syllabus - Master these priorities:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "📚 Comprehension",
                    percentage: "33%",
                    label: "Prep Time",
                    color: "red",
                  },
                  {
                    title: "🔢 Numeracy",
                    percentage: "25%",
                    label: "Prep Time",
                    color: "blue",
                  },
                  {
                    title: "📊 Data Interpretation",
                    percentage: "22%",
                    label: "Prep Time",
                    color: "green",
                  },
                  {
                    title: "🧩 Logical Reasoning",
                    percentage: "20%",
                    label: "Seating/Puzzles",
                    color: "purple",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className={`bg-gradient-to-br ${
                      item.color === "red"
                        ? "from-red-500 to-red-600"
                        : item.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : item.color === "green"
                        ? "from-green-500 to-green-600"
                        : "from-purple-500 to-purple-600"
                    } p-1 shadow-xl`}
                  >
                    <div className="bg-white p-6 h-full">
                      <h4 className="text-xl font-black text-gray-800 mb-3 uppercase">
                        {item.title}
                      </h4>
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-600 mb-2">
                        {item.percentage}
                      </div>
                      <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

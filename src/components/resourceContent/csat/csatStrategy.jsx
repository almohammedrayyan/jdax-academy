import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Clock,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function CSATStrategy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strategies = [
    {
      icon: Target,
      title: "Target Setting",
      color: "red",
      points: [
        "Minimum: 66 marks (33%)",
        "Safe Target: 75-80 marks",
        "Remember: Even 200/200 = same as 66/200 for merit!",
        "Strategy: Quality over quantity",
      ],
    },
    {
      icon: Clock,
      title: "Time Management",
      color: "blue",
      points: [
        "120 minutes ÷ 80 questions = 1.5 min/question",
        "Comprehension: 2 min/question (32-36 Qs)",
        "DI Sets: 8-10 min/set (12-15 Qs)",
        "Numeracy: 1-1.5 min/question",
        "Logical: 1.5-2 min/question",
      ],
    },
    {
      icon: TrendingUp,
      title: "Attempt Strategy",
      color: "green",
      points: [
        "Round 1: Easy comprehension + DI sets (30-35 Qs)",
        "Round 2: Numeracy shortcuts (10-12 Qs)",
        "Round 3: Logical reasoning patterns (8-10 Qs)",
        "Skip: Lengthy calculations, confusing passages",
      ],
    },
    {
      icon: BookOpen,
      title: "Daily Practice Routine",
      color: "purple",
      points: [
        "Morning: 2-3 comprehension passages (30 min)",
        "Afternoon: 1 DI set + 10 numeracy Qs (30 min)",
        "Evening: Logical reasoning puzzles (20 min)",
        "Weekly: 1 full mock test (2 hours)",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Common Pitfalls to Avoid",
      color: "amber",
      points: [
        "❌ Ignoring CSAT until last moment",
        "❌ Using outside knowledge in comprehension",
        "❌ Attempting all 80 questions",
        "❌ Long calculation methods",
        "❌ Not practicing mock tests",
      ],
    },
    {
      icon: CheckCircle,
      title: "Success Mantras",
      color: "teal",
      points: [
        "✅ Daily practice is non-negotiable",
        "✅ Master shortcuts for numeracy",
        "✅ Comprehension = reading + speed",
        "✅ DI sets are scoring goldmines",
        "✅ Quality attempts > Quantity",
      ],
    },
  ];

  const colorClasses = {
    red: "from-red-500 to-red-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    amber: "from-amber-500 to-amber-600",
    teal: "from-teal-500 to-teal-600",
  };

  return (
    <section id="strategy" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-12">
          📈 Winning Strategy
        </h2>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            const gradientClass = colorClasses[strategy.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div
                  className={`bg-gradient-to-r ${gradientClass} text-white rounded-lg p-4 mb-4 flex items-center gap-3`}
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{strategy.title}</h3>
                </div>

                <ul className="space-y-2">
                  {strategy.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Final Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-red-50 border-l-4 border-red-600 rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
            <Target className="w-7 h-7" />
            Final Reality Check
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Remember:</strong> CSAT won&apos;t make you a topper, but
            CAN eliminate you! Consistent daily practice of 1-1.5 hours for 3–4
            months is enough to clear the 33% barrier. Balance is key!
          </p>
        </motion.div>

        {/* Quick Reference Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Quick Reference: Topic-wise Time Allocation
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <tr>
                  <th className="px-6 py-4">Topic</th>
                  <th className="px-6 py-4 text-center">Questions</th>
                  <th className="px-6 py-4 text-center">Time/Question</th>
                  <th className="px-6 py-4 text-center">Total Time</th>
                  <th className="px-6 py-4 text-center">Priority</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    topic: "Comprehension",
                    questions: "32-36",
                    timePerQ: "2 min",
                    totalTime: "64-72 min",
                    priority: "CRITICAL",
                  },
                  {
                    topic: "Data Interpretation",
                    questions: "12-15",
                    timePerQ: "Set-based",
                    totalTime: "25-30 min",
                    priority: "CRITICAL",
                  },
                  {
                    topic: "Numeracy",
                    questions: "13-16",
                    timePerQ: "1-1.5 min",
                    totalTime: "13-24 min",
                    priority: "CRITICAL",
                  },
                  {
                    topic: "Logical Reasoning",
                    questions: "13-17",
                    timePerQ: "1.5-2 min",
                    totalTime: "20-34 min",
                    priority: "HIGH",
                  },
                  {
                    topic: "Mental Ability",
                    questions: "8-12",
                    timePerQ: "1 min",
                    totalTime: "8-12 min",
                    priority: "MEDIUM",
                  },
                  {
                    topic: "Decision Making",
                    questions: "0-1",
                    timePerQ: "-",
                    totalTime: "-",
                    priority: "LOW",
                  },
                  {
                    topic: "Interpersonal Skills",
                    questions: "0",
                    timePerQ: "-",
                    totalTime: "-",
                    priority: "LOW",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {row.topic}
                    </td>
                    <td className="px-6 py-4 text-center">{row.questions}</td>
                    <td className="px-6 py-4 text-center">{row.timePerQ}</td>
                    <td className="px-6 py-4 text-center font-semibold">
                      {row.totalTime}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          row.priority === "CRITICAL"
                            ? "bg-red-100 text-red-800"
                            : row.priority === "HIGH"
                            ? "bg-orange-100 text-orange-800"
                            : row.priority === "MEDIUM"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {row.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

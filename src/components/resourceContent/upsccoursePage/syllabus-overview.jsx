import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  Clock,
  Trophy,
  Target,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    label: "Topics",
    value: 7,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    label: "Duration",
    value: "2 Hours",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Trophy,
    label: "Total Marks",
    value: 200,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Target,
    label: "Questions",
    value: "~100",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    label: "Aspirants",
    value: "10L+",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "0.1%",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export function SyllabusOverview({ refProp }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="overview" className="py-20 bg-white" ref={refProp}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            UPSC Prelims <span className="text-blue-600">Overview</span>
          </h2>

          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ textAlign: "center" }}
          >
            Paper I: General Studies (200 marks) - Duration: 2 hours
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-2 duration-300">
                  {/* Icon + Stat Value */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${stat.bg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>

                    <motion.div
                      className={`text-3xl font-bold ${stat.color}`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {stat.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Smart Analysis Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              JDAX's Smart Syllabus Analysis
            </h3>

            <p className="text-blue-600 font-semibold text-lg italic">
              "Most aspirants read the syllabus. Toppers DECODE it!"
            </p>

            <p className="text-gray-600 mt-2">— JDAX Academy</p>
          </div>

          {/* Cards at bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Key Insight
              </h4>
              <p className="text-gray-600 leading-relaxed">
                This is the most dynamic and highest-scoring section with ~20–25
                questions yearly. UPSC tests your ability to connect current
                affairs with core concepts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Success Strategy
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Link current affairs with Polity, Geography, Economy,
                Environment, and S&T for comprehensive UPSC readiness.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

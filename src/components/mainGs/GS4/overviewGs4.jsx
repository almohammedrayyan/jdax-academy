import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Users,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function GS4Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FileText,
      label: "Theory Questions",
      value: "40-50%",
      sublabel: "100-125 marks",
      color: "rose",
    },
    {
      icon: Users,
      label: "Case Studies",
      value: "50-60%",
      sublabel: "125-150 marks",
      color: "pink",
    },
    {
      icon: Scale,
      label: "Meta Ethics",
      value: "35%",
      sublabel: "Topics 1-8",
      color: "red",
    },
    {
      icon: Lightbulb,
      label: "Applied Ethics",
      value: "65%",
      sublabel: "Topics 9-13",
      color: "rose",
    },
  ];

  const insights = [
    {
      icon: AlertTriangle,
      title: "Case Study Dominance",
      description:
        "Practice 100+ case studies - no clear right/wrong answers, test your approach",
      priority: "CRITICAL",
    },
    {
      icon: Users,
      title: "Stakeholder Analysis",
      description:
        "Every case has multiple parties - analyze impact on each stakeholder",
      priority: "HIGH",
    },
    {
      icon: TrendingUp,
      title: "Emotional Intelligence",
      description:
        "EI questions regular - self-awareness, empathy, conflict resolution",
      priority: "HIGH",
    },
  ];

  return (
    <section id="overview" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paper Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            250 marks | 3 hours | Theory + Case Studies | Tests attitude,
            integrity & problem-solving
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border border-${stat.color}-200 rounded-2xl p-6 hover:shadow-xl transition-all`}
            >
              <stat.icon className={`w-10 h-10 text-${stat.color}-600 mb-4`} />
              <div className={`text-3xl font-bold text-${stat.color}-900 mb-2`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-7 h-7 text-rose-600" />
            Critical Insights from JDAX Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={insight.title} className="space-y-3">
                <div className="flex items-start gap-3">
                  <insight.icon className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900">
                        {insight.title}
                      </h4>
                      <span
                        className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                          insight.priority === "CRITICAL"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {insight.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-6 bg-rose-100 border-l-4 border-rose-600 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-rose-900">
              ⚠️ <strong>REALITY CHECK:</strong> Ethics is NOT about preaching.
              UPSC tests your approach to real dilemmas with no clear answers.
              Show stakeholder analysis, trade-offs, and practical action plans
              - not moral sermons!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

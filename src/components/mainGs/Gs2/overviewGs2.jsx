import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Scale,
  Heart,
  Globe,
  TrendingUp,
  Target,
  AlertCircle,
} from "lucide-react";
import React from "react";

export default function GS2Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Total Marks", value: "250", icon: Target, color: "purple" },
    { label: "Questions", value: "20", icon: Scale, color: "violet" },
    { label: "Duration", value: "3 hrs", icon: TrendingUp, color: "fuchsia" },
    { label: "Sections", value: "3", icon: Globe, color: "purple" },
  ];

  const sections = [
    {
      title: "Constitution & Polity",
      topics: "9 Topics",
      marks: "110-130 marks",
      percentage: "48%",
      icon: Scale,
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Governance & Social Justice",
      topics: "7 Topics",
      marks: "80-100 marks",
      percentage: "36%",
      icon: Heart,
      color: "violet",
      gradient: "from-violet-500 to-violet-700",
    },
    {
      title: "International Relations",
      topics: "4 Topics",
      marks: "40-50 marks",
      percentage: "18%",
      icon: Globe,
      color: "fuchsia",
      gradient: "from-fuchsia-500 to-fuchsia-700",
    },
  ];

  const insights = [
    {
      title: "Highest Scoring Potential",
      desc: "GS2 = Constitution + Current Affairs. If Polity is strong and CA updated, this can be your highest scoring paper!",
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Dynamic + Static Balance",
      desc: "Constitution & Polity are static (60% effort, 48% marks). Governance & IR are dynamic (40% effort, 54% marks).",
      icon: Scale,
      color: "violet",
    },
    {
      title: "Case Laws = Game Changer",
      desc: "Kesavananda Bharati, SR Bommai, NJAC, Minerva Mills - NON-NEGOTIABLE! Answers without case laws look incomplete.",
      icon: AlertCircle,
      color: "fuchsia",
    },
  ];

  return (
    <section id="overview" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-purple-900 mb-4">
            Paper Overview
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            GS2 tests your understanding of Constitutional framework, Governance
            mechanisms, and India's place in the world
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow`}
              >
                <Icon
                  className={`w-8 h-8 text-${stat.color}-600 mx-auto mb-3`}
                />
                <div
                  className={`text-4xl font-bold text-${stat.color}-900 mb-2`}
                >
                  {stat.value}
                </div>
                <div className={`text-sm font-medium text-${stat.color}-700`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Three Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Three Key Sections
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-purple-900 mb-2">
                    {section.title}
                  </h4>
                  <div className="space-y-2 text-purple-700">
                    <p className="font-semibold">{section.topics}</p>
                    <p className="text-lg">{section.marks}</p>
                    <div
                      className={`inline-block px-4 py-1 bg-${section.color}-100 text-${section.color}-800 rounded-full text-sm font-bold`}
                    >
                      {section.percentage}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Strategic Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={`bg-gradient-to-br from-${insight.color}-50 to-${insight.color}-100 rounded-xl p-6 border-l-4 border-${insight.color}-600`}
                >
                  <Icon
                    className={`w-10 h-10 text-${insight.color}-600 mb-4`}
                  />
                  <h4
                    className={`text-xl font-bold text-${insight.color}-900 mb-3`}
                  >
                    {insight.title}
                  </h4>
                  <p className={`text-${insight.color}-700 leading-relaxed`}>
                    {insight.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

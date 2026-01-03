import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Cpu,
  Leaf,
  Shield,
  AlertTriangle,
  Target,
  Database,
} from "lucide-react";
import React from "react";

export default function GS3Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Total Marks", value: "250", icon: Target, color: "cyan" },
    { label: "Questions", value: "20", icon: TrendingUp, color: "sky" },
    { label: "Duration", value: "3 hrs", icon: Database, color: "teal" },
    { label: "Sections", value: "5", icon: Cpu, color: "cyan" },
  ];

  const sections = [
    {
      title: "Economic Development",
      topics: "16 Topics",
      marks: "110-130 marks",
      percentage: "48%",
      icon: TrendingUp,
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
    },
    {
      title: "Science & Technology",
      topics: "4 Topics",
      marks: "40-50 marks",
      percentage: "18%",
      icon: Cpu,
      color: "sky",
      gradient: "from-sky-500 to-sky-700",
    },
    {
      title: "Environment",
      topics: "1 Topic",
      marks: "30-40 marks",
      percentage: "14%",
      icon: Leaf,
      color: "teal",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      title: "Disaster Management",
      topics: "1 Topic",
      marks: "20-30 marks",
      percentage: "10%",
      icon: AlertTriangle,
      color: "cyan",
      gradient: "from-cyan-500 to-teal-700",
    },
    {
      title: "Security",
      topics: "6 Topics",
      marks: "30-40 marks",
      percentage: "12%",
      icon: Shield,
      color: "sky",
      gradient: "from-sky-500 to-cyan-700",
    },
  ];

  const insights = [
    {
      title: "Economic Survey = Bible",
      desc: "Single most important document for GS3! Vol 1 chapters on agriculture, manufacturing, infrastructure are CRITICAL.",
      icon: TrendingUp,
      color: "cyan",
    },
    {
      title: "Current Affairs Heavy",
      desc: "GS3 = 70% current affairs. Recent policies, schemes, tech developments, environmental events - all essential.",
      icon: Database,
      color: "sky",
    },
    {
      title: "Data & Statistics Mandatory",
      desc: "GDP growth rates, crop production figures, pollution levels, LWE districts - quantitative backing crucial!",
      icon: Target,
      color: "teal",
    },
  ];

  return (
    <section id="overview" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
            Paper Overview
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            GS3 tests your understanding of Economic Development, Technology,
            Environmental challenges, and Security threats
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-cyan-900 mb-8 text-center">
            Five Key Sections
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-cyan-100 hover:border-cyan-300"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-full flex items-center justify-center mb-4 mx-auto`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-cyan-900 mb-2 text-center">
                    {section.title}
                  </h4>
                  <div className="space-y-2 text-cyan-700 text-center">
                    <p className="font-semibold text-sm">{section.topics}</p>
                    <p className="text-sm">{section.marks}</p>
                    <div
                      className={`inline-block px-3 py-1 bg-${section.color}-100 text-${section.color}-800 rounded-full text-xs font-bold`}
                    >
                      {section.percentage}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-cyan-900 mb-8 text-center">
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

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Cpu, Leaf, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function GS3PaperArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedSection, setExpandedSection] = useState(0);

  const sections = [
    {
      title: "Economic Development",
      icon: TrendingUp,
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      marks: "110-130",
      percentage: 48,
      topics: [
        "T1: Indian Economy - Planning, Growth, Employment",
        "T2: Inclusive Growth",
        "T3: Government Budgeting",
        "T4: Major Crops - Cropping Patterns",
        "T5: Irrigation Systems",
        "T6: Storage, Transport, Marketing - Agricultural Constraints",
        "T7: E-Technology for Farmers",
        "T8: Farm Subsidies & MSP",
        "T9: Public Distribution System",
        "T10: Technology Missions",
        "T11: Animal Rearing Economics",
        "T12: Food Processing Industries",
        "T13: Land Reforms",
        "T14: Liberalization Effects - Industrial Policy",
        "T15: Infrastructure - Energy, Ports, Roads, Railways",
        "T16: Investment Models",
      ],
      priority: "CRITICAL",
      insight:
        "Economic Survey Vol 1 = THE BIBLE! Agriculture (Topics 4-13) = 30 marks, Industrial/Infrastructure (14-16) = 25 marks.",
    },
    {
      title: "Science & Technology",
      icon: Cpu,
      color: "sky",
      gradient: "from-sky-500 to-sky-700",
      marks: "40-50",
      percentage: 18,
      topics: [
        "T17: S&T Developments - Applications in Daily Life",
        "T18: Indian Achievements in S&T (ISRO, Vaccines)",
        "T19: Indigenization - New Technology Development",
        "T20: IT, Space, Robotics, Nano-tech, Bio-tech, IPR",
      ],
      priority: "CRITICAL",
      insight:
        "ISRO missions, AI/ML applications, indigenization (Atmanirbhar Bharat) - VERY REGULAR!",
    },
    {
      title: "Environment",
      icon: Leaf,
      color: "teal",
      gradient: "from-teal-500 to-teal-700",
      marks: "30-40",
      percentage: 14,
      topics: ["T21: Conservation, Pollution, Degradation, EIA"],
      priority: "CRITICAL",
      insight:
        "Climate change (COP summits), pollution (AQI, stubble burning), EIA dilution - ALMOST EVERY YEAR!",
    },
    {
      title: "Disaster Management",
      icon: AlertTriangle,
      color: "cyan",
      gradient: "from-cyan-500 to-teal-700",
      marks: "20-30",
      percentage: 10,
      topics: ["T22: Disaster & Disaster Management"],
      priority: "HIGH",
      insight:
        "NDMA, NDRF, early warning systems, climate-disaster linkage - REGULAR!",
    },
    {
      title: "Security",
      icon: Shield,
      color: "sky",
      gradient: "from-sky-500 to-cyan-700",
      marks: "30-40",
      percentage: 12,
      topics: [
        "T23: Development-Extremism Linkage (LWE)",
        "T24: External State & Non-State Actors",
        "T25: Communication Networks, Cyber Security",
        "T26: Money Laundering Prevention",
        "T27: Border Area Security - Organized Crime",
        "T28: Security Forces & Agencies",
      ],
      priority: "CRITICAL",
      insight:
        "LWE, cross-border terrorism, cyber security, AFSPA - VERY REGULAR!",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-20 bg-gradient-to-br from-cyan-50 to-sky-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
            Paper Architecture
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            250 Marks | 3 Hours | 20 Questions (10-mark + 15-mark)
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === index;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-100 hover:border-cyan-300 transition-all"
              >
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : index)}
                  className="w-full p-8 text-left hover:bg-cyan-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-cyan-900">
                            Section {index + 1}: {section.title}
                          </h3>
                          <span
                            className={`px-3 py-1 bg-${section.color}-100 text-${section.color}-800 rounded-full text-xs font-bold uppercase`}
                          >
                            {section.priority}
                          </span>
                        </div>
                        <p className="text-cyan-600 font-medium">
                          {section.topics.length} Topic
                          {section.topics.length > 1 ? "s" : ""} •{" "}
                          {section.marks} marks • {section.percentage}%
                          weightage
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AlertTriangle
                        className={`w-6 h-6 text-${section.color}-600`}
                      />
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 border-t border-cyan-100">
                    <div
                      className={`bg-gradient-to-r ${section.gradient} text-white p-4 rounded-lg mb-6`}
                    >
                      <p className="text-sm font-medium">
                        <strong>Strategic Insight:</strong> {section.insight}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {section.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: topicIndex * 0.05 }}
                          className={`flex items-start gap-3 p-4 bg-${section.color}-50 rounded-lg hover:bg-${section.color}-100 transition-colors`}
                        >
                          <div
                            className={`w-6 h-6 bg-${section.color}-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold`}
                          >
                            {topicIndex +
                              1 +
                              (index === 1
                                ? 16
                                : index === 2
                                ? 20
                                : index === 3
                                ? 21
                                : index === 4
                                ? 22
                                : 0)}
                          </div>
                          <p
                            className={`text-${section.color}-900 font-medium flex-1`}
                          >
                            {topic}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Critical Formula for GS3 Success
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            <strong>Economic Survey (48%)</strong> + Recent Schemes +
            Agriculture Data +<strong> Current S&T (18%)</strong> + ISRO
            Missions +<strong> Environment Events (14%)</strong> + COP Outcomes
            +<strong> Security Trends (12%)</strong> ={" "}
            <strong>150+ Marks</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

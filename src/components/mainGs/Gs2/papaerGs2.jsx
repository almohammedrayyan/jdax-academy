import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scale, Heart, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function GS2PaperArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedSection, setExpandedSection] = useState(0);

  const sections = [
    {
      title: "Constitution & Polity",
      icon: Scale,
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      marks: "110-130",
      percentage: 48,
      topics: [
        "T1: Indian Constitution - Historical, Evolution, Features, Amendments, Basic Structure",
        "T2: Federal Structure - Centre-State Relations, Devolution",
        "T3: Separation of Powers - Dispute Redressal",
        "T4: Comparative Constitutional Schemes",
        "T5: Parliament & State Legislatures",
        "T6: Executive & Judiciary Structure",
        "T7: Pressure Groups & Representation of People's Act",
        "T8: Constitutional Bodies (CAG, EC, UPSC, etc.)",
        "T9: Statutory/Regulatory/Quasi-Judicial Bodies",
      ],
      priority: "CRITICAL",
      insight:
        "Static content = 60% effort, 48% marks. Master M. Laxmikanth + recent amendments + case laws.",
    },
    {
      title: "Governance & Social Justice",
      icon: Heart,
      color: "violet",
      gradient: "from-violet-500 to-violet-700",
      marks: "80-100",
      percentage: 36,
      topics: [
        "T10: Government Policies & Interventions",
        "T11: Development Industry - NGOs, SHGs",
        "T12: Welfare Schemes for Vulnerable Sections",
        "T13: Social Sector - Health, Education, Human Resources",
        "T14: Poverty & Hunger",
        "T15: Governance - Transparency, Accountability, E-Governance",
        "T16: Role of Civil Services in Democracy",
      ],
      priority: "CRITICAL",
      insight:
        "Dynamic content = 25% effort, 36% marks. Current Affairs + Economic Survey + Scheme knowledge.",
    },
    {
      title: "International Relations",
      icon: Globe,
      color: "fuchsia",
      gradient: "from-fuchsia-500 to-fuchsia-700",
      marks: "40-50",
      percentage: 18,
      topics: [
        "T17: India & Neighborhood Relations",
        "T18: Bilateral, Regional, Global Groupings",
        "T19: Effect of Developed/Developing Countries' Policies",
        "T20: International Institutions (UN, WTO, IMF)",
      ],
      priority: "HIGH",
      insight:
        "Dynamic content = 15% effort, 18% marks. The Hindu International section + MEA website MUST!",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-20 bg-gradient-to-br from-purple-50 to-violet-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-purple-900 mb-4">
            Paper Architecture
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all"
              >
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : index)}
                  className="w-full p-8 text-left hover:bg-purple-50 transition-colors"
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
                          <h3 className="text-2xl font-bold text-purple-900">
                            Section {index + 1}: {section.title}
                          </h3>
                          <span
                            className={`px-3 py-1 bg-${section.color}-100 text-${section.color}-800 rounded-full text-xs font-bold uppercase`}
                          >
                            {section.priority}
                          </span>
                        </div>
                        <p className="text-purple-600 font-medium">
                          {section.topics.length} Topics • {section.marks} marks
                          • {section.percentage}% weightage
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TrendingUp
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
                  <div className="p-8 pt-0 border-t border-purple-100">
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
                              (index === 1 ? 9 : index === 2 ? 16 : 0)}
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Critical Formula for GS2 Success
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            <strong>Polity (48%)</strong> from M. Laxmikanth + Recent Amendments
            + Case Laws +<strong> Governance (36%)</strong> from Current Affairs
            + Schemes + Economic Survey +<strong> IR (18%)</strong> from The
            Hindu + MEA Website = <strong>150+ Marks</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { BookOpen, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import React from "react";

export default function GS4PaperArchitecture() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedSection, setExpandedSection] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Meta Ethics & Foundational Concepts",
      topics: "Topics 1-8",
      weightage: 35,
      marks: "80-100",
      color: "rose",
      icon: BookOpen,
      keyAreas: [
        "Ethics & Human Interface (essence, determinants, consequences)",
        "Dimensions of ethics (individual, social, professional)",
        "Ethics in private & public relationships",
        "Human Values - lessons from great leaders",
        "Attitude - content, structure, function",
        "Aptitude & foundational values for Civil Service",
        "Emotional Intelligence - concepts & applications",
        "Moral thinkers & philosophers (India & World)",
      ],
      focus: "Theoretical foundation - definitions, concepts, thinkers",
    },
    {
      id: 2,
      title: "Applied Ethics in Public Administration",
      topics: "Topics 9-13",
      weightage: 65,
      marks: "150-170",
      color: "red",
      icon: Users,
      keyAreas: [
        "Public service values & ethics in administration",
        "Ethical concerns & dilemmas (govt & private)",
        "Laws, rules, conscience as ethical guidance",
        "Accountability & ethical governance",
        "Ethical issues in international relations",
        "Corporate governance",
        "Probity in Governance (11 sub-topics)",
        "Case Studies on ethical dilemmas",
      ],
      focus: "Real-world application - case studies dominate this section",
    },
  ];

  return (
    <section
      id="architecture"
      ref={ref}
      className="py-20 bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paper Architecture
          </h2>
          <p className="text-xl text-gray-600">
            Two broad divisions: Foundational Theory (35%) + Applied Ethics
            (65%)
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-white border-2 border-${section.color}-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all`}
            >
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r from-${section.color}-500 to-${section.color}-600 p-6 cursor-pointer`}
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? null : section.id
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <section.icon className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {section.title}
                      </h3>
                      <p className="text-rose-100 mt-1">{section.topics}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">
                      {section.weightage}%
                    </div>
                    <div className="text-rose-100 text-sm">
                      {section.marks} marks
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm text-white font-medium">
                      {section.focus}
                    </p>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Expandable Content */}
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gradient-to-br from-rose-50 to-white"
                >
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Key Areas Covered:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.keyAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-${section.color}-500 mt-2 flex-shrink-0`}
                        />
                        <p className="text-gray-700 text-sm">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Case Study Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            🎯 Case Study Approach Dominates
          </h3>
          <p className="text-rose-100 text-lg">
            Section B consists entirely of case studies (125-150 marks). These
            test your attitude, integrity, and problem-solving - not just
            theoretical knowledge!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

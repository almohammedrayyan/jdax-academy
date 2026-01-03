import { motion } from "framer-motion";
import { Target, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function GS480_20Rule() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const mustMaster = [
    {
      topic: "Case Studies Approach",
      marks: "125-150",
      focus:
        "Practice 100+ case studies - stakeholder analysis, ethical reasoning, action plans",
      priority: "CRITICAL",
    },
    {
      topic: "Emotional Intelligence",
      marks: "20",
      focus:
        "Leadership, crisis scenarios, conflict resolution, EI in governance",
      priority: "CRITICAL",
    },
    {
      topic: "Probity in Governance",
      marks: "30",
      focus: "Corruption, RTI, accountability mechanisms, Lokpal, CVC",
      priority: "CRITICAL",
    },
    {
      topic: "Civil Service Values",
      marks: "25",
      focus: "Integrity, impartiality, empathy - applied to case studies",
      priority: "HIGH",
    },
    {
      topic: "Ethical Dilemmas in Administration",
      marks: "30",
      focus: "Whistleblowing, conflict of interest, law vs conscience",
      priority: "HIGH",
    },
  ];

  const shouldMaster = [
    {
      topic: "Philosophers & Thinkers",
      marks: "15",
      focus: "Gandhi, Kant, Aristotle - application",
    },
    {
      topic: "Attitude, Human Values",
      marks: "20",
      focus: "Leaders' teachings, institutional role",
    },
    {
      topic: "Corporate Governance",
      marks: "10",
      focus: "CSR, ESG, recent scams",
    },
    {
      topic: "International Ethics",
      marks: "10",
      focus: "Climate justice, humanitarian intervention",
    },
  ];

  return (
    <section
      id="80-20-rule"
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
            80-20 Rule for GS4
          </h2>
          <p className="text-xl text-gray-600">
            Strategic preparation guide - Focus 80% effort on these high-yield
            topics
          </p>
        </motion.div>

        {/* Must Master - 70% marks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-t-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Must Master</h3>
                  <p className="text-rose-100">70% of marks - Non-negotiable</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">230+</div>
                <div className="text-rose-100 text-sm">marks potential</div>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-red-200 rounded-b-2xl p-6 space-y-4">
            {mustMaster.map((item, index) => (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl"
              >
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{item.topic}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${
                          item.priority === "CRITICAL"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {item.priority}
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full">
                        {item.marks} marks
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{item.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Should Master - 30% marks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-t-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Should Master
                  </h3>
                  <p className="text-rose-100">30% of marks - Important</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">55+</div>
                <div className="text-rose-100 text-sm">marks potential</div>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-rose-200 rounded-b-2xl p-6 space-y-3">
            {shouldMaster.map((item, index) => (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-white border border-rose-200 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.topic}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.focus}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 text-sm font-bold rounded-full">
                  {item.marks} marks
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            🎯 Case Studies are THE GAME CHANGER
          </h3>
          <p className="text-rose-100 text-lg">
            Practice 100+ case studies covering conflict of interest,
            whistleblowing, resource allocation, disaster decisions. Show
            stakeholder analysis, trade-offs, and practical action plans - not
            moral sermons!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

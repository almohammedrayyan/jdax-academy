import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Lightbulb,
  Clock,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Calendar,
  BarChart3,
} from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Priority Framework",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    points: [
      "Polity & Governance (28%) - Highest weightage, start here",
      "Current Events (25%) - Daily practice essential",
      "Economy & Social (23%) - Government schemes focus",
      "History (18%) - NCERT foundation crucial",
      "Geography (17%) - Atlas practice mandatory",
    ],
  },
  {
    icon: Clock,
    title: "Time Management",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    points: [
      "Month 1-2: Complete NCERT foundation (6-12 all subjects)",
      "Month 3-4: Standard books + Current affairs start",
      "Month 5-6: Revision cycles + Mock test series",
      "Final Month: Quick revision + Error analysis",
      "Daily: 2-3 hours current affairs + Map practice",
    ],
  },
  {
    icon: TrendingUp,
    title: "Smart Study Approach",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    points: [
      "Connect current affairs with static topics always",
      "Make notes topic-wise, not source-wise",
      "Practice previous year questions after each topic",
      "Use mind maps for complex topics (Polity, Geography)",
      "Regular mock tests from Month 3 onwards",
    ],
  },
  {
    icon: Award,
    title: "Success Habits",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    points: [
      "Read newspaper daily - The Hindu/Indian Express",
      "Watch Sansad TV programs weekly",
      "Government magazine reading (Yojana/Kurukshetra)",
      "Monthly current affairs compilation",
      "Weekly map practice with atlas",
    ],
  },
];

const commonMistakes = [
  "Reading too many books instead of focusing on NCERT + 1-2 standard books",
  "Ignoring current affairs or studying them without context",
  "Not practicing maps regularly leading to location-based question failures",
  "Avoiding numerical data and statistics in Economy section",
  "Reading syllabus topics in isolation without interconnection",
];

const keyInsights = [
  {
    icon: BarChart3,
    title: "Weightage Insight",
    description:
      "Top 3 topics (Polity, Current Events, Economy) contribute 76% of questions",
  },
  {
    icon: Calendar,
    title: "Preparation Time",
    description:
      "6-8 months of focused preparation with daily 8-10 hours study",
  },
  {
    icon: BookOpen,
    title: "Resource Strategy",
    description: "NCERT (40%) + Standard Books (30%) + Current Affairs (30%)",
  },
];

export function StudyStrategy({ refProp }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="strategy"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
      ref={refProp}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-100 rounded-full">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Strategic <span className="text-purple-600">Study Guide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JDAX Academy's proven framework for systematic and strategic UPSC
            Prelims preparation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Key Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {keyInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{insight.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`h-full shadow-xl border-l-4 ${strategy.borderColor} group hover:shadow-2xl transition-all duration-300 rounded-lg`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-full ${strategy.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${strategy.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {strategy.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {strategy.points?.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Common Mistakes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Avoid These <span className="text-red-600">Common Mistakes</span>
            </h3>
            <p className="text-gray-600">
              Learn from others' experiences and avoid these preparation
              pitfalls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-sm border border-red-100 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {mistake}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your UPSC Journey?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              "Most aspirants read the syllabus. Toppers DECODE it!" - JDAX
              Academy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-semibold">
                  Last Updated: November 2025
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-semibold">
                  © JDAX Academy - Rise to Serve
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

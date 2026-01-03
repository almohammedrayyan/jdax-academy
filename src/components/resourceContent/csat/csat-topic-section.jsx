import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  BookOpen,
  Users,
  Brain,
  Target,
  Lightbulb,
  Calculator,
  BarChart3,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

const topics = [
  {
    number: 1,
    title: "Comprehension",
    icon: BookOpen,
    color: "red",
    deconstruction:
      '"Comprehension" = Reading passages (600-900 words) and answering based ONLY on what\'s written (NOT outside knowledge!). Types: Factual (science, economics), Literary (stories), Philosophical (abstract ideas), Contemporary (social issues, policy)',
    whatUpscAsks: {
      questions: "32-36 (HIGHEST in CSAT!)",
      focus: [
        "Main idea, inferences, author's tone",
        "Vocabulary in context, assumptions, conclusions",
        "Strengthen/weaken arguments",
        "Passages: 6-7 per exam",
      ],
    },
    trend: {
      status: "stable",
      description:
        "✅ Consistently 32-36 questions - THE MOST IMPORTANT CSAT topic!",
    },
    commonMistake:
      "Using outside knowledge! Answer STRICTLY from passage only.",
    resources: {
      books: ["Previous Year Papers (2013-2025) → MOST IMPORTANT!"],
      daily: [
        "The Hindu Editorial → 1 daily (speed + vocab)",
        "Yojana articles → Abstract passages",
      ],
      strategy: ["2-3 passages daily"],
    },
    priority: "critical",
  },
  {
    number: 2,
    title: "Interpersonal Skills including Communication Skills",
    icon: Users,
    color: "blue",
    deconstruction:
      '"Interpersonal Skills including Communication Skills" = How you interact/work with others + effective expression/listening. Tests: Workplace scenarios (team conflicts, boss-subordinate), emotional intelligence, conflict resolution',
    whatUpscAsks: {
      questions: "Declined from 8-10 (in 2011-2015) to ZERO in recent times",
      focus: [],
    },
    trend: {
      status: "eliminated",
      description: "❌ Almost completely eliminated in recent exams",
    },
    resources: {
      books: [
        "Read 20-30 scenarios, understand pattern of PYQs asked during 2011-2015",
      ],
      strategy: [
        "Key principle: Empathy > Aggression, Communication > Confrontation",
      ],
    },
    priority: "low",
  },
  {
    number: 3,
    title: "Logical Reasoning and Analytical Ability",
    icon: Brain,
    color: "amber",
    deconstruction:
      '"Logical Reasoning" = Drawing conclusions from statements (syllogisms, assumptions, cause-effect). "Analytical Ability" = Breaking down info, finding patterns (seating, puzzles, coding, series)',
    whatUpscAsks: {
      questions: "13-17",
      focus: [
        "Seating Arrangements: 5-7 Qs ✅ INCREASING!",
        "Statement-Assumption: 3-5 Qs ✅ Stable",
        "Coding-Decoding: 2-3 Qs ✅ Regular",
        "Series (Number/Letter): 3-4 Qs ✅ Stable",
        "Puzzles & Games: 4-6 Qs ✅ High",
        "Syllogisms: ZERO Qs ❌ NOT asked since 2020!",
      ],
    },
    trend: {
      status: "stable",
      description:
        "Reality: Syllogisms completely dropped (was regular till 2019)!",
    },
    resources: {
      books: [
        "R.S. Aggarwal - Logical Reasoning (skip syllogism chapter!)",
        "CSAT Manual by TMH",
      ],
      strategy: [
        "HIGH PRIORITY: Seating arrangements (50+ puzzles), Statement-Assumption (100 Qs)",
        "MEDIUM: Coding (20-30 Qs), Series (50 Qs)",
        "SKIP: Syllogisms (just basic concept, don't practice!)",
      ],
    },
    priority: "high",
  },
  {
    number: 4,
    title: "Decision Making and Problem Solving",
    icon: Target,
    color: "purple",
    deconstruction:
      '"Decision Making" = Choosing best action from multiple options with constraints. "Problem Solving" = Identifying root cause, finding solutions systematically. Tests: Administrative scenarios, prioritization, resource allocation, ethical dilemmas',
    whatUpscAsks: {
      questions:
        "2011-2013: 10-12 Qs, 2014-2016: 5-8 Qs, 2017-2019: 2-4 Qs, 2020-2024: Almost ELIMINATED!",
      focus: [
        "Why dropped? Overlap with Mains Ethics, difficult for objective MCQs",
      ],
    },
    trend: {
      status: "eliminated",
      description: "❌ Almost completely eliminated since 2020",
    },
    resources: {
      books: ["Previous Year (2011-2015) → See old pattern only"],
      strategy: [
        "Key: Life > Property > Protocol, Public interest > Individual interest",
      ],
    },
    priority: "low",
  },
  {
    number: 5,
    title: "General Mental Ability",
    icon: Lightbulb,
    color: "indigo",
    deconstruction:
      '"General Mental Ability" = Overall cognitive skills (spatial, visual, pattern recognition). "General" = NOT specialized, Class X level. Tests: Paper folding, cube problems, mirror images, embedded figures, visual patterns',
    whatUpscAsks: {
      questions: "8-12",
      focus: [
        "Paper folding/cutting (2-3)",
        "Cube/dice (1-2)",
        "Mirror/water images (1-2)",
        "Figures/matrix (2-3)",
        "Odd one out",
      ],
    },
    trend: {
      status: "stable",
      description: "✅ Stable 8-12 questions",
    },
    commonMistake:
      "Ignoring visual reasoning - these are EASY scoring if practiced!",
    resources: {
      books: ["Class 8-10 Math → Mental ability chapters"],
      strategy: [
        "Previous Year (2013-2025)",
        "Paper folding (20 problems), Cube (15 problems), Mirrors (30 problems)",
        "Learn tricks! 30 seconds if you know pattern, 3 minutes if you don't",
      ],
    },
    priority: "medium",
  },
  {
    number: 6,
    title: "Basic Numeracy (Class X level)",
    icon: Calculator,
    color: "green",
    deconstruction:
      '"Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level)" = Fundamental math: Fractions, decimals, percentages, ratios, averages, profit-loss, SI/CI, time-work-distance. "(Class X level)" = CRITICAL BOUNDARY! NO calculus, trigonometry, advanced algebra!',
    whatUpscAsks: {
      questions: "13-16",
      focus: [
        "Percentages/Averages (4-5)",
        "Ratios (2-3)",
        "Profit-Loss (2-3)",
        "Interest (1-2)",
        "Time-Work-Distance (2-3)",
        "Number systems (1-2)",
        "Algebra basics (1-2)",
      ],
    },
    trend: {
      status: "stable",
      description: "✅ Stable 13-16 questions",
    },
    commonMistake: "Long methods (time waste!), attempting all questions",
    resources: {
      books: [
        "Class 8-10 Math → All arithmetic chapters - Sufficient for concepts!",
        "R.S. Aggarwal - Quantitative Aptitude → Shortcuts & formulas",
        "Rajesh Verma - Fast Track Arithmetic → Quick tricks",
      ],
      strategy: [
        "Shortcuts are KING - learn formula tricks for every topic",
        "In exam: Attempt easy first, skip lengthy calculations!",
      ],
    },
    priority: "critical",
  },
  {
    number: 7,
    title: "Data Interpretation (Class X level)",
    icon: BarChart3,
    color: "teal",
    deconstruction:
      '"Data interpretation (charts, graphs, tables, data sufficiency etc. — Class X level)" = Analyzing data in visual/tabular formats: Pie/Bar/Line charts, Tables, Data sufficiency',
    whatUpscAsks: {
      questions: "12-15 (SECOND HIGHEST after Comprehension!)",
      focus: [
        "Data sufficiency (5-6)",
        "Table analysis (2-3)",
        "Charts (2-3)",
        "Mixed DI (2-3)",
      ],
    },
    trend: {
      status: "stable",
      description:
        "✅ Rock solid 12-15 questions (4-5 sets always!) - EASY SCORING!",
    },
    commonMistake:
      "Deciding and decoding sufficiency of data, skipping DI practice",
    resources: {
      books: [
        "Previous Year (2013-2025)",
        "Arun Sharma - Data Interpretation → DI practice",
      ],
      strategy: [
        "DI sets: 2 sets (6-8 questions) daily",
        "In exam: Attempt easy first!",
      ],
    },
    priority: "critical",
  },
];

function TopicCard({ topic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const Icon = topic.icon;

  const colorClasses = {
    red: "border-red-600 bg-gradient-to-br from-red-500 to-red-700",
    blue: "border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700",
    amber: "border-amber-600 bg-gradient-to-br from-amber-500 to-amber-700",
    purple: "border-purple-600 bg-gradient-to-br from-purple-500 to-purple-700",
    indigo: "border-indigo-600 bg-gradient-to-br from-indigo-500 to-indigo-700",
    green: "border-green-600 bg-gradient-to-br from-green-500 to-green-700",
    teal: "border-teal-600 bg-gradient-to-br from-teal-500 to-teal-700",
  };

  const priorityClasses = {
    critical:
      "border-red-700 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg",
    high: "border-orange-700 bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg",
    medium:
      "border-yellow-700 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg",
    low: "border-green-700 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg",
  };

  const trendIcons = {
    increasing: TrendingUp,
    stable: Minus,
    declining: TrendingDown,
    eliminated: AlertTriangle,
  };

  const TrendIcon = trendIcons[topic.trend.status];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
      className={`bg-white overflow-hidden shadow-lg border-l-8 transition-all hover:translate-x-2 ${
        colorClasses[topic.color]?.split(" ")[0]
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          colorClasses[topic.color]
        } text-white p-6 cursor-pointer border-b-4 border-black/20`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black/20 w-14 h-14 flex items-center justify-center border-2 border-white/50">
              <span className="text-3xl font-black">{topic.number}</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="w-7 h-7" />
              <h3 className="text-xl md:text-2xl font-black uppercase">
                {topic.title}
              </h3>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-7 h-7" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white">
              {/* Deconstruction */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-lg">
                <div className="bg-white p-5 border-l-8 border-blue-700">
                  <h4 className="text-xl font-black text-blue-900 mb-3 flex items-center uppercase">
                    <Target className="w-6 h-6" /> Deconstruction
                  </h4>
                  <p className="text-gray-800">{topic.deconstruction}</p>
                </div>
              </div>

              {/* What UPSC Asks */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-1 shadow-lg">
                <div className="bg-white p-5 border-l-8 border-green-700">
                  <h4 className="text-xl font-black text-green-900 mb-3 flex items-center uppercase">
                    <BookOpen className="w-6 h-6" /> What UPSC Asks
                  </h4>

                  <p className="font-bold text-lg mb-3 text-gray-900">
                    Questions: {topic.whatUpscAsks.questions}
                  </p>

                  {topic.whatUpscAsks.focus?.length > 0 && (
                    <ul className="space-y-2">
                      {topic.whatUpscAsks.focus.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-green-600 font-black">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Trend */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-1 shadow-lg">
                <div className="bg-white p-5 border-l-8 border-purple-700">
                  <h4 className="text-xl font-black text-purple-900 mb-3 flex items-center uppercase">
                    <TrendIcon className="w-6 h-6" /> Trend (2020–2024)
                  </h4>
                  <p className="text-gray-800">{topic.trend.description}</p>
                </div>
              </div>

              {/* Common Mistake */}
              {topic.commonMistake && (
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-lg">
                  <div className="bg-red-50 p-5 border-l-8 border-red-700">
                    <h4 className="text-xl font-black text-red-900 mb-3 flex items-center uppercase">
                      <AlertTriangle className="w-6 h-6" /> Common Mistake
                    </h4>
                    <p>{topic.commonMistake}</p>
                  </div>
                </div>
              )}

              {/* Resources */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-1 shadow-lg">
                <div className="bg-white p-5 border-l-8 border-amber-700">
                  <h4 className="text-xl font-black text-amber-900 mb-3 flex items-center uppercase">
                    <BookOpen className="w-6 h-6" /> JDAX Suggested Resources
                  </h4>

                  {topic.resources.books && (
                    <div className="mb-4">
                      <p className="font-semibold">Books:</p>
                      <ul className="list-disc ml-5 space-y-1">
                        {topic.resources.books.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.resources.daily && (
                    <div className="mb-4">
                      <p className="font-semibold">Daily Practice:</p>
                      <ul className="list-disc ml-5 space-y-1">
                        {topic.resources.daily.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.resources.strategy && (
                    <div>
                      <p className="font-semibold">Strategy:</p>
                      <ul className="list-disc ml-5 space-y-1">
                        {topic.resources.strategy.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Priority Badge */}
              <div className="flex justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-3 px-8 py-4 border-4 font-black uppercase text-lg tracking-widest ${
                    priorityClasses[topic.priority]
                  }`}
                >
                  {topic.priority === "critical" && <span>🔥</span>}
                  {topic.priority === "high" && <span>⚡</span>}
                  {topic.priority === "medium" && <span>⭐</span>}
                  {topic.priority === "low" && <span>✓</span>}
                  {topic.priority.toUpperCase()} PRIORITY
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CSATTopicSections() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 p-1 mb-12 shadow-2xl">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 py-8 px-6">
            <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase">
              📚 Complete Topic Breakdown
            </h2>
            <p className="text-center text-white font-bold text-lg mt-3">
              All 7 CSAT Topics with JDAX Deconstruction
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {topics.map((topic) => (
            <TopicCard key={topic.number} topic={topic} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

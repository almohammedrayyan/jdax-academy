import { motion } from "framer-motion";
import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function GS4CommonMistakes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const mistakes = [
    {
      id: 1,
      mistake: "Theoretical answers to case studies",
      problem:
        "Writing ethics definitions and theories instead of YOUR approach",
      solution:
        "Show stakeholder analysis, your reasoning process, action plan with steps",
      severity: "CRITICAL",
    },
    {
      id: 2,
      mistake: "Preaching/sermonizing",
      problem:
        'Writing "officer should be honest" - it\'s obvious and adds no value',
      solution:
        "Show HOW to navigate the dilemma with practical steps, not moral lectures",
      severity: "CRITICAL",
    },
    {
      id: 3,
      mistake: "Black & white solutions",
      problem: "Claiming there's one clear right answer - real ethics is grey",
      solution:
        "Show awareness of competing values, trade-offs, and justify your choice",
      severity: "HIGH",
    },
    {
      id: 4,
      mistake: "Ignoring stakeholders",
      problem: "Not identifying all parties affected by your decision",
      solution:
        "List ALL stakeholders (superior, subordinate, public, family, law), analyze impact on each",
      severity: "CRITICAL",
    },
    {
      id: 5,
      mistake: "No practical steps",
      problem: 'Vague answers like "do the right thing" without action plan',
      solution:
        "Give sequence of steps, prioritization, risk mitigation, implementation strategy",
      severity: "HIGH",
    },
    {
      id: 6,
      mistake: "Only quoting thinkers",
      problem: 'Just writing "As Gandhi said..." without application',
      solution: "Apply the philosophy to the specific case - show relevance",
      severity: "MEDIUM",
    },
    {
      id: 7,
      mistake: "Missing emotional intelligence angle",
      problem:
        "Not showing EI aspects - empathy, self-awareness, conflict resolution",
      solution:
        "Explicitly mention how you'd manage emotions, show empathy, use social skills",
      severity: "HIGH",
    },
    {
      id: 8,
      mistake: "Moral absolutism",
      problem: 'Claiming "truth always" - reality is complex',
      solution:
        "Show situational ethics - sometimes silence better than bitter truth",
      severity: "MEDIUM",
    },
    {
      id: 9,
      mistake: "Not practicing case studies",
      problem: "Relying on theory reading only, not solving 100+ case studies",
      solution:
        "Practice diverse case studies - write full answers with stakeholder analysis",
      severity: "CRITICAL",
    },
    {
      id: 10,
      mistake: "Ignoring recent ethical controversies",
      problem:
        "Not reading news - UPSC picks real incidents from last 3-5 years",
      solution:
        "Read The Hindu daily - note corruption cases, civil servant controversies, ethical debates",
      severity: "HIGH",
    },
  ];

  return (
    <section
      id="mistakes"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Common Mistakes
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Avoid these pitfalls that cost marks in GS4
          </p>
        </motion.div>

        {/* Mistakes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mistakes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border-2 border-rose-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Mistake Header */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-b-2 border-rose-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 text-sm font-semibold">
                          Mistake #{item.id}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                            item.severity === "CRITICAL"
                              ? "bg-red-100 text-red-700"
                              : item.severity === "HIGH"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.severity}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.mistake}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="p-4 space-y-4">
                {/* Problem */}
                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-sm">
                      PROBLEM:
                    </span>
                    <p className="text-gray-700 text-sm flex-1">
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-green-700 font-bold text-sm">
                        SOLUTION:
                      </span>
                      <p className="text-gray-700 text-sm mt-1">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ⚠️ Reality Check for GS4
            </h3>
            <div className="space-y-3 text-rose-100 text-lg max-w-4xl mx-auto">
              <p>
                <strong className="text-white">
                  GS4 is NOT about knowing ethics theory.
                </strong>{" "}
                It\'s about demonstrating your approach to real dilemmas.
              </p>
              <p>
                <strong className="text-white">UPSC tests:</strong> Can you
                identify stakeholders? Do you understand trade-offs? Can you
                take a stand and justify it? Are you practical or just
                theoretical?
              </p>
              <p>
                <strong className="text-white">Key to success:</strong> Practice
                100+ case studies, read recent controversies, show stakeholder
                analysis, give practical action plans - NOT moral sermons!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

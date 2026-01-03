import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";

export default function GS1CommonMistakes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mistakes = [
    {
      mistake: "Only static content, no current linkage",
      why: "UPSC expects integration of historical events with contemporary issues",
      solution:
        "Always add recent examples (e.g., Freedom fighter anniversaries, UNESCO inscriptions, climate summits)",
      icon: "📅",
    },
    {
      mistake: "Narrative style in history",
      why: "UPSC wants analytical approach, not storytelling",
      solution:
        "Focus on causes, consequences, significance. Use framework: What-Why-Impact",
      icon: "📊",
    },
    {
      mistake: "Ignoring regional diversity",
      why: "Freedom struggle/culture questions need pan-India perspective",
      solution:
        "Cover contributions from Bengal, Maharashtra, Tamil Nadu, Punjab, Kerala, Northeast",
      icon: "🗺️",
    },
    {
      mistake: "No diagrams/maps in answers",
      why: "Geography answers MUST have visual aids; society can use flowcharts",
      solution:
        "Practice drawing maps (ocean currents, landforms), flowcharts (social issues)",
      icon: "🎨",
    },
    {
      mistake: "Missing data in society answers",
      why: "Vague answers get lower marks",
      solution:
        "Use data: sex ratio (943/1000), urbanization (34%), poverty rates, demographic dividend window",
      icon: "📈",
    },
    {
      mistake: "Theory without examples",
      why: "Abstract concepts need concrete illustration",
      solution:
        "Every concept needs 2-3 contemporary examples (e.g., Communalism → recent incidents)",
      icon: "💡",
    },
    {
      mistake: "Ignoring NCERT (especially Geography)",
      why: "NCERT is the base; questions are directly from it",
      solution:
        "Read NCERT thoroughly, multiple times. Geography NCERT = Gold mine!",
      icon: "📚",
    },
    {
      mistake: "No atlas practice",
      why: "Location-based questions are regular in Geography",
      solution:
        "Use atlas weekly. Mark locations of: glaciers, minerals, industries, ocean features",
      icon: "🗾",
    },
    {
      mistake: "Only Indian focus in geography",
      why: "World geography (physical + resources) = 40% of Geography section",
      solution:
        "Study global: ocean currents, mountain ranges, resource distribution, climate zones",
      icon: "🌍",
    },
    {
      mistake: "Missing historiographical perspectives",
      why: "History has multiple interpretations - UPSC tests awareness",
      solution:
        "Read different viewpoints (nationalist, Marxist, subaltern) on same event",
      icon: "🔍",
    },
  ];

  return (
    <section id="mistakes" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-300"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            className="text-4xl md:text-5xl font-black text-red-700 mb-6 flex items-center justify-center gap-4"
          >
            <AlertTriangle className="w-12 h-12" />
            Common Mistakes to Avoid
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Learn from others' mistakes! These 10 errors cost valuable marks in
            GS1.
          </p>
        </div>

        {/* Mistakes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mistakes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200"
            >
              {/* Mistake Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-5">
                <div className="flex items-start gap-3">
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Mistake #{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-black leading-tight">
                      {item.mistake}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Why it's wrong */}
                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                  <p className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Why it's wrong:
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.why}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Solution:
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Warning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-12 h-12 flex-shrink-0 animate-pulse" />
            <div>
              <h3 className="text-3xl font-black mb-4">FINAL REALITY CHECK</h3>
              <div className="space-y-3 text-lg">
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black flex-shrink-0">
                    →
                  </span>
                  <span>
                    GS1 is NOT about memorization - it's about{" "}
                    <strong>
                      understanding + application + current linkage
                    </strong>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black flex-shrink-0">
                    →
                  </span>
                  <span>
                    Your answer quality matters MORE than quantity.{" "}
                    <strong>
                      150 words of quality {" > "} 250 words of fluff
                    </strong>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black flex-shrink-0">
                    →
                  </span>
                  <span>
                    Practice answer writing regularly.{" "}
                    <strong>
                      At least 3 answers daily after syllabus completion
                    </strong>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black flex-shrink-0">
                    →
                  </span>
                  <span>
                    Revise History and Geography <strong>every 15 days</strong>{" "}
                    to retain. Society needs monthly CA updates.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

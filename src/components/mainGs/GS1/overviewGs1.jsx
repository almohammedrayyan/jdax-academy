import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, TrendingUp, Zap } from "lucide-react";

export default function GS1Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="overview" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-emerald-200"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            className="text-4xl md:text-5xl font-black text-emerald-700 mb-4 flex items-center justify-center gap-4"
          >
            <Award className="w-12 h-12" />
            What is GS Paper 1?
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            GS1 is the{" "}
            <strong className="text-emerald-600">foundation paper</strong> that
            tests your understanding of{" "}
            <strong>
              India's cultural heritage, historical evolution, societal
              dynamics, and geographical foundations
            </strong>
            . It's about connecting the past with the present!
          </p>
        </div>

        {/* Key Characteristics */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-l-8 border-emerald-500 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-emerald-800">
                Static + Dynamic
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>60% Static</strong> (Culture, History, Geography basics) +{" "}
              <strong>40% Current Affairs</strong> linkage. You MUST connect
              historical events with contemporary issues for high scores!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-8 border-blue-500 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-800">Answer Style</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Analytical {" > "} Descriptive</strong>. UPSC wants
              causes, consequences, significance - not just facts! Use
              flowcharts, diagrams (especially Geography), and data points.
            </p>
          </motion.div>
        </div>

        {/* Critical Reality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="flex items-start gap-4">
            <Zap className="w-10 h-10 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-3xl font-black mb-4">
                CRITICAL REALITY CHECK
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black">→</span>
                  <span>
                    GS1 scores are typically <strong>LOWER</strong> than other
                    GS papers (Average: 85-100/250)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black">→</span>
                  <span>
                    History + Society = 55-60% of paper (140-155 marks) - FOCUS
                    HERE!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black">→</span>
                  <span>
                    Current affairs integration is NON-NEGOTIABLE (e.g., Freedom
                    fighter anniversaries, social issues, climate change)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-black">→</span>
                  <span>NCERT is the BIBLE for Geography - Don't skip it!</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

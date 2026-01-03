import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import React from "react";

export default function GS2CommonMistakes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mistakes = [
    {
      mistake: "Only constitutional provisions, no current issues",
      why: "GS2 demands linkage between static and dynamic. Pure theory answers score low.",
      solution:
        "Link every Article with recent controversy. E.g., Article 356 + Recent Governor-CM conflicts.",
      color: "red",
    },
    {
      mistake: "Ignoring case laws",
      why: "Constitutional provisions without case law interpretation are incomplete.",
      solution:
        "Kesavananda Bharati, SR Bommai, NJAC, Minerva Mills - NON-NEGOTIABLE! Memorize key ratio decidendi.",
      color: "red",
    },
    {
      mistake: "No data/statistics",
      why: "Governance and scheme questions need quantitative backing.",
      solution:
        "ADR criminal MPs %, Parliamentary productivity %, poverty rates, scheme beneficiaries count.",
      color: "orange",
    },
    {
      mistake: "Missing recent developments",
      why: "GS2 is 50% current affairs. Outdated examples = low marks.",
      solution:
        "Last 2-3 years: Article 370, CAA, Governor-CM conflicts, G20 presidency, BRICS expansion.",
      color: "orange",
    },
    {
      mistake: "Only criticism, no solutions",
      why: "UPSC wants balanced answers with way forward.",
      solution:
        "Give Law Commission/2nd ARC/Election Commission recommendations for every issue.",
      color: "yellow",
    },
    {
      mistake: "Not covering state-level",
      why: "Federalism is Centre + States. Ignoring states = incomplete understanding.",
      solution:
        "Schemes have Centre + State versions. Mention state variations in implementation.",
      color: "yellow",
    },
    {
      mistake: "Theory dump in IR",
      why: "IR needs geopolitical analysis, not textbook definitions.",
      solution:
        "Need India's interests/stakes, recent developments, strategic importance. E.g., Quad = China containment.",
      color: "orange",
    },
    {
      mistake: "Ignoring neighborhood",
      why: "India's neighborhood = 50% of IR marks alone!",
      solution:
        "China (LAC), Pakistan (terrorism), Bangladesh (water), Nepal (Madhesi), Sri Lanka (Tamil) - MUST COVER!",
      color: "red",
    },
    {
      mistake: "Missing scheme details",
      why: "Generic scheme mention = 2-3 marks. Detailed analysis = 8-10 marks.",
      solution:
        "Know objectives, beneficiaries, implementation mechanism, outcomes (with data!).",
      color: "orange",
    },
    {
      mistake: "No linkages",
      why: "GS papers are interconnected. Isolated answers miss depth.",
      solution:
        "Polity overlaps with GS1 (freedom struggle), GS3 (schemes), GS4 (ethics in governance).",
      color: "yellow",
    },
  ];

  return (
    <section id="mistakes" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-red-100 px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <span className="text-red-800 font-bold uppercase tracking-wide">
              Critical Mistakes
            </span>
          </div>
          <h2 className="text-5xl font-bold text-purple-900 mb-4">
            10 Common Mistakes in GS2
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Avoid these pitfalls to maximize your GS2 score
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {mistakes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.8) }}
              className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-${item.color}-200`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 bg-${item.color}-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold text-${item.color}-900 mb-2`}
                  >
                    {item.mistake}
                  </h3>
                </div>
              </div>

              <div
                className={`bg-white rounded-lg p-4 mb-4 border-l-4 border-${item.color}-600`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <XCircle
                    className={`w-5 h-5 text-${item.color}-600 flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p
                      className={`text-sm font-semibold text-${item.color}-900 mb-1`}
                    >
                      Why it\'s wrong:
                    </p>
                    <p className={`text-sm text-${item.color}-800`}>
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-4`}
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Solution:</p>
                    <p className="text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Master These Corrections</h3>
          <p className="text-xl max-w-3xl mx-auto">
            Fixing these 10 mistakes alone can boost your GS2 score by{" "}
            <strong className="text-2xl">20-30 marks!</strong>
            <br />
            <span className="text-lg">
              Constitution + Case Laws + Current Affairs + Data = 150+ Marks
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

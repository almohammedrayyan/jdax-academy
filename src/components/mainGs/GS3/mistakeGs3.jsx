import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import React from "react";

export default function GS3CommonMistakes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mistakes = [
    {
      mistake: "Only theory, no data/statistics",
      why: "GS3 demands quantitative backing. Generic statements score low.",
      solution:
        "GDP growth rates, crop production figures, AQI levels, LWE districts data - MUST in every answer!",
      color: "red",
    },
    {
      mistake: "Ignoring Economic Survey",
      why: "Single most important document for GS3! Ignoring it = losing 48% marks.",
      solution:
        "Read Economic Survey Vol 1 completely (Agriculture, Industry, Infrastructure chapters) - NON-NEGOTIABLE!",
      color: "red",
    },
    {
      mistake: "Missing recent schemes/policies",
      why: "GS3 = 70% current affairs. Last 3-5 years schemes are regular.",
      solution:
        "Know PM-KISAN, e-NAM, PLI schemes, NEP 2020, Digital India, Atmanirbhar Bharat - with data!",
      color: "orange",
    },
    {
      mistake: "Environment = only theory",
      why: "Need recent events, COP outcomes, pollution episodes, species listings.",
      solution:
        "COP summits outcomes, AQI trends, EIA 2020 amendments, recent species listings, climate events.",
      color: "orange",
    },
    {
      mistake: "Security = generic statements",
      why: "Need specific data and recent trends.",
      solution:
        "LWE districts reduced from X to Y, cyber-attack cases, recent terror incidents with analysis.",
      color: "orange",
    },
    {
      mistake: "Ignoring government reports",
      why: "Economic Survey, NITI, ISRO, MoEFCC reports have scheme details and data.",
      solution:
        "Annual reports of ministries + NITI Aayog strategy papers = marks goldmine!",
      color: "yellow",
    },
    {
      mistake: "No linkages between sections",
      why: "Economy-Environment (green growth), Development-Security (LWE), Tech-Economy overlap.",
      solution:
        "Show interconnections: Green growth, Just transition, Technology for inclusion, Holistic development.",
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
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
            7 Common Mistakes in GS3
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            Avoid these pitfalls to maximize your GS3 score
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
                      Why it's wrong:
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Master These Corrections</h3>
          <p className="text-xl max-w-3xl mx-auto">
            Fixing these 7 mistakes alone can boost your GS3 score by{" "}
            <strong className="text-2xl">25-35 marks!</strong>
            <br />
            <span className="text-lg">
              Economic Survey + Data + Current Affairs + Linkages = 150+ Marks
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

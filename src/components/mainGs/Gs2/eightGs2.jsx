import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, TrendingUp, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

export default function GS280_20Rule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priorities = [
    {
      title: "Must Master",
      subtitle: "65% of marks",
      percentage: 65,
      color: "red",
      gradient: "from-red-500 to-red-700",
      topics: [
        {
          name: "Constitution - Basic Structure, FR, DPSP",
          marks: 30,
          priority: "CRITICAL",
        },
        {
          name: "Federal Structure, Centre-State Relations",
          marks: 25,
          priority: "CRITICAL",
        },
        {
          name: "Welfare Schemes, Social Justice",
          marks: 30,
          priority: "CRITICAL",
        },
        {
          name: "Governance, Transparency, RTI, E-Gov",
          marks: 25,
          priority: "CRITICAL",
        },
        {
          name: "India's Neighborhood (China, Pakistan)",
          marks: 20,
          priority: "CRITICAL",
        },
      ],
    },
    {
      title: "Should Master",
      subtitle: "25% of marks",
      percentage: 25,
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
      topics: [
        {
          name: "Parliament, Anti-defection, Committees",
          marks: 25,
          priority: "HIGH",
        },
        {
          name: "Executive-Judiciary (Collegium, Governor)",
          marks: 20,
          priority: "HIGH",
        },
        {
          name: "Health, Education sectors (NEP, Ayushman Bharat)",
          marks: 20,
          priority: "HIGH",
        },
        {
          name: "Global groupings (G20, Quad, BRICS)",
          marks: 15,
          priority: "HIGH",
        },
      ],
    },
    {
      title: "Good to Master",
      subtitle: "10% of marks",
      percentage: 10,
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-700",
      topics: [
        { name: "Comparative constitutions", marks: 15, priority: "MEDIUM" },
        { name: "Pressure groups, RPA", marks: 10, priority: "MEDIUM" },
        {
          name: "Constitutional/Statutory bodies",
          marks: 15,
          priority: "MEDIUM",
        },
        {
          name: "International institutions (UN, WTO)",
          marks: 15,
          priority: "MEDIUM",
        },
      ],
    },
  ];

  const strategy = [
    {
      phase: "Foundation (Month 1-2)",
      focus: "M. Laxmikanth cover-to-cover + NCERT 11-12 Polity",
      output: "Static portion 80% complete",
      icon: CheckCircle,
    },
    {
      phase: "Current Affairs Integration (Month 3-4)",
      focus:
        "The Hindu daily + PRS India + Ministry websites + Economic Survey (Social sector)",
      output: "Dynamic portion current + scheme knowledge",
      icon: TrendingUp,
    },
    {
      phase: "Case Laws & Answer Writing (Month 5-6)",
      focus: "Kesavananda, SR Bommai, NJAC + 50 PYQs + Mains answer writing",
      output: "Answer quality 150+ level",
      icon: Star,
    },
  ];

  return (
    <section id="strategy" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-purple-900 mb-4">
            80-20 Rule for GS2
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Strategic prioritization for maximum marks with minimum effort
          </p>
        </motion.div>

        {/* Three Priority Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {priorities.map((priority, index) => (
            <motion.div
              key={priority.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100"
            >
              <div
                className={`bg-gradient-to-r ${priority.gradient} text-white p-6`}
              >
                <Target className="w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold mb-1">{priority.title}</h3>
                <p className="text-sm opacity-90">{priority.subtitle}</p>
                <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
                  {mounted && (
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${priority.percentage}%` } : {}
                      }
                      transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                    />
                  )}
                </div>
              </div>

              <div className="p-6 space-y-3">
                {priority.topics.map((topic, topicIndex) => (
                  <motion.div
                    key={topicIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.7 + index * 0.15 + topicIndex * 0.05,
                    }}
                    className={`flex items-start gap-3 p-3 bg-${priority.color}-50 rounded-lg hover:bg-${priority.color}-100 transition-colors`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-${priority.color}-100 rounded-lg flex items-center justify-center`}
                    >
                      <span
                        className={`text-${priority.color}-700 font-bold text-lg`}
                      >
                        {topic.marks}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-purple-900 font-medium text-sm leading-snug">
                        {topic.name}
                      </p>
                      <span
                        className={`inline-block mt-1 px-2 py-0.5 bg-${priority.color}-200 text-${priority.color}-800 rounded text-xs font-bold`}
                      >
                        {topic.priority}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6-Month Preparation Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            6-Month Mastery Plan
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strategy.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-900 mb-3">
                    {phase.phase}
                  </h4>
                  <p className="text-purple-700 mb-4 text-sm">
                    <strong>Focus:</strong> {phase.focus}
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-600">
                    <p className="text-purple-900 font-semibold text-sm">
                      ✓ {phase.output}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Success Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">GS2 Success Formula</h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            <strong>Polity (48%)</strong> = Laxmikanth + Amendments + Case Laws
            |<strong> Governance (36%)</strong> = Current Affairs + Schemes +
            Economic Survey |<strong> IR (18%)</strong> = The Hindu + MEA +
            ORF/IDSA =<strong className="text-2xl"> 150+ Marks</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

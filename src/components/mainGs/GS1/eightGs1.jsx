import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, TrendingUp, Star } from "lucide-react";

export default function GS1EightyTwenty() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const priorities = [
    {
      level: "Must Master",
      percentage: "65%",
      marks: "~165 marks",
      color: "from-red-600 to-red-700",
      topics: [
        {
          name: "Freedom Struggle - stages, contributors",
          marks: 40,
          icon: "🔥",
        },
        { name: "Urbanization, poverty, women issues", marks: 35, icon: "🔥" },
        {
          name: "Communalism, secularism, social empowerment",
          marks: 30,
          icon: "🔥",
        },
        {
          name: "Geophysical phenomena, glacier changes",
          marks: 25,
          icon: "🔥",
        },
        { name: "World Wars, decolonization", marks: 25, icon: "🔥" },
      ],
    },
    {
      level: "Should Master",
      percentage: "25%",
      marks: "~60 marks",
      color: "from-orange-600 to-orange-700",
      topics: [
        {
          name: "Post-independence consolidation (land reforms, reorganization)",
          marks: 20,
          icon: "⚡",
        },
        {
          name: "Industrial location, resource distribution",
          marks: 20,
          icon: "⚡",
        },
        {
          name: "Modern Indian history (colonial impact)",
          marks: 20,
          icon: "⚡",
        },
        { name: "Globalization effects", marks: 15, icon: "⚡" },
      ],
    },
    {
      level: "Good to Master",
      percentage: "10%",
      marks: "~25 marks",
      color: "from-yellow-600 to-yellow-700",
      topics: [
        { name: "Indian culture - art, architecture", marks: 20, icon: "⭐" },
        { name: "Indian society features, diversity", marks: 15, icon: "⭐" },
        { name: "Physical geography basics", marks: 20, icon: "⭐" },
      ],
    },
  ];

  return (
    <section id="80-20" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-amber-300"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            className="text-4xl md:text-5xl font-black text-amber-700 mb-6 flex items-center justify-center gap-4"
          >
            <Zap className="w-12 h-12" />
            80-20 Rule for GS1
            <Zap className="w-12 h-12" />
          </motion.h2>
          <p className="text-2xl font-bold text-gray-700 mb-4">
            Focus on <span className="text-red-600">20% Topics</span> that give
            you <span className="text-red-600">80% Marks</span>!
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not all topics are equal. Master the high-weightage topics first,
            then move to others.
          </p>
        </div>

        {/* Priority Levels */}
        <div className="space-y-8">
          {priorities.map((priority, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100"
            >
              {/* Priority Header */}
              <div
                className={`bg-gradient-to-r ${priority.color} text-white p-6`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {priority.level === "Must Master" && (
                      <TrendingUp className="w-10 h-10" />
                    )}
                    {priority.level === "Should Master" && (
                      <Star className="w-10 h-10" />
                    )}
                    {priority.level === "Good to Master" && (
                      <Zap className="w-10 h-10" />
                    )}
                    <div>
                      <h3 className="text-3xl font-black">{priority.level}</h3>
                      <p className="text-sm font-semibold opacity-90">
                        Priority Level {index + 1}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black">{priority.percentage}</p>
                    <p className="text-sm font-semibold">{priority.marks}</p>
                  </div>
                </div>
              </div>

              {/* Topics List */}
              <div className="p-6">
                <div className="grid gap-4">
                  {priority.topics.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{topic.icon}</span>
                        <span className="text-lg font-bold text-gray-800">
                          {topic.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-emerald-600">
                          {topic.marks}
                        </span>
                        <span className="text-sm text-gray-600 ml-1">
                          marks
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Study Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <h3 className="text-3xl font-black mb-6 text-center">
            📅 Preparation Timeline Strategy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-6xl font-black mb-2">First</p>
              <p className="text-2xl font-bold mb-3">2 Months</p>
              <p className="text-sm font-semibold opacity-90">
                Focus on MUST MASTER topics (Freedom Struggle, Society issues,
                Geography phenomena)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-6xl font-black mb-2">Next</p>
              <p className="text-2xl font-bold mb-3">1.5 Months</p>
              <p className="text-sm font-semibold opacity-90">
                Cover SHOULD MASTER topics (Post-independence, Modern history,
                Resources)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-6xl font-black mb-2">Final</p>
              <p className="text-2xl font-bold mb-3">0.5 Month</p>
              <p className="text-sm font-semibold opacity-90">
                Polish GOOD TO MASTER topics (Culture, Society basics) +
                Revision
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

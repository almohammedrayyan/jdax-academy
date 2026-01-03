import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Landmark, BookOpen, Users, Globe, PieChart } from "lucide-react";

export default function GS1PaperArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      icon: Landmark,
      title: "Indian Heritage and Culture",
      topic: "Topic 1",
      marks: "35-45 marks",
      percentage: "16%",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: BookOpen,
      title: "History",
      topic: "Topics 2-5",
      marks: "80-90 marks",
      percentage: "35%",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Users,
      title: "Society",
      topic: "Topics 6-9",
      marks: "55-65 marks",
      percentage: "24%",
      color: "from-rose-500 to-rose-700",
      bgColor: "from-rose-50 to-rose-100",
    },
    {
      icon: Globe,
      title: "Geography",
      topic: "Topics 10-12",
      marks: "60-70 marks",
      percentage: "27%",
      color: "from-teal-500 to-teal-700",
      bgColor: "from-teal-50 to-teal-100",
    },
  ];

  return (
    <section id="architecture" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-emerald-300"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            className="text-4xl md:text-5xl font-black text-emerald-700 mb-6 flex items-center justify-center gap-4"
          >
            <PieChart className="w-12 h-12" />
            Paper Architecture
          </motion.h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xl font-bold text-gray-700 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-emerald-600">Duration: 3 Hours</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-600">Marks: 250</span>
            <span className="text-gray-400">|</span>
            <span className="text-purple-600">Questions: 20</span>
            <span className="text-gray-400">|</span>
            <span className="text-rose-600">Sections: 4</span>
          </div>
        </div>

        {/* Four Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-gradient-to-br ${section.bgColor} rounded-2xl p-6 border-4 border-white shadow-xl`}
            >
              <div
                className={`bg-gradient-to-r ${section.color} text-white rounded-xl p-4 mb-4 flex items-center gap-4`}
              >
                <section.icon className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                  <p className="text-sm font-semibold opacity-90">
                    {section.topic}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-black text-gray-800 mb-1">
                    {section.marks}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    Average per paper
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    {section.percentage}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    of Paper
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Question Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <h3 className="text-3xl font-black mb-6 text-center">
            Question Structure
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-6xl font-black mb-2">10</p>
              <p className="text-xl font-bold mb-2">10-Mark Questions</p>
              <p className="text-sm opacity-90">
                150 words | Focus on definitions, features, basic analysis
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-6xl font-black mb-2">10</p>
              <p className="text-xl font-bold mb-2">15-Mark Questions</p>
              <p className="text-sm opacity-90">
                250 words | Deeper analysis, multiple dimensions, examples
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

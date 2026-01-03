"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Library, BookOpen, Globe, FileText, Star } from "lucide-react";

export default function GS1Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      section: "Indian Heritage and Culture",
      icon: Library,
      color: "from-purple-500 to-purple-700",
      items: [
        {
          type: "NCERT",
          name: "Class 11: An Introduction to Indian Art (Part 1)",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 11: Living Craft Traditions of India",
          priority: "critical",
        },
        {
          type: "Government",
          name: "Archaeological Survey of India (asi.gov.in)",
          priority: "critical",
        },
        {
          type: "Government",
          name: "Ministry of Culture (indiaculture.gov.in)",
          priority: "high",
        },
        {
          type: "Book",
          name: "Indian Art & Culture by Nitin Singhania",
          priority: "high",
        },
      ],
    },
    {
      section: "History",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
      items: [
        { type: "NCERT", name: "Class 8: Our Pasts III", priority: "critical" },
        {
          type: "NCERT",
          name: "Class 12: Themes in Indian History II & III",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 9-10: India and Contemporary World",
          priority: "critical",
        },
        {
          type: "Book",
          name: "India's Struggle for Independence by Bipin Chandra",
          priority: "critical",
        },
        {
          type: "Book",
          name: "A Brief History of Modern India by Spectrum",
          priority: "high",
        },
        {
          type: "Book",
          name: "Bipan Chandra's India Since Independence",
          priority: "high",
        },
        {
          type: "Book",
          name: "Mastering Modern World History by Norman Lowe",
          priority: "high",
        },
        {
          type: "Government",
          name: "Constituent Assembly Debates (constitutionofindia.net)",
          priority: "medium",
        },
      ],
    },
    {
      section: "Society",
      icon: Globe,
      color: "from-rose-500 to-rose-700",
      items: [
        {
          type: "NCERT",
          name: "Class 11: Indian Society",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 12: Indian Society (Contemporary issues)",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 12: Indian Economic Development",
          priority: "critical",
        },
        {
          type: "Report",
          name: "Economic Survey (Social sector chapters)",
          priority: "critical",
        },
        {
          type: "Report",
          name: "NITI Aayog SDG India Index",
          priority: "high",
        },
        { type: "Report", name: "Census 2011 data", priority: "high" },
        {
          type: "Report",
          name: "NFHS (National Family Health Survey)",
          priority: "high",
        },
        {
          type: "Government",
          name: "Ministry of Women & Child Development (wcd.nic.in)",
          priority: "medium",
        },
      ],
    },
    {
      section: "Geography",
      icon: FileText,
      color: "from-teal-500 to-teal-700",
      items: [
        {
          type: "NCERT",
          name: "Class 11: Fundamentals of Physical Geography",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 11: India - Physical Environment",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 12: India - People and Economy",
          priority: "critical",
        },
        {
          type: "Atlas",
          name: "Oxford School Atlas OR Orient BlackSwan Atlas",
          priority: "critical",
        },
        {
          type: "NCERT",
          name: "Class 9: Contemporary India I (Physical features)",
          priority: "high",
        },
        {
          type: "NCERT",
          name: "Class 10: Contemporary India II (Resources)",
          priority: "high",
        },
        {
          type: "Government",
          name: "Forest Survey of India (fsi.gov.in)",
          priority: "high",
        },
        {
          type: "Report",
          name: "IPCC Reports (Cryosphere chapter summaries)",
          priority: "high",
        },
      ],
    },
  ];

  const priorityColors = {
    critical: "bg-red-100 text-red-800 border-red-300",
    high: "bg-orange-100 text-orange-800 border-orange-300",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  return (
    <section id="resources" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-blue-300"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            className="text-4xl md:text-5xl font-black text-blue-700 mb-6 flex items-center justify-center gap-4"
          >
            <Library className="w-12 h-12" />
            Core Resources
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Section-wise essential resources with priority levels.{" "}
            <strong className="text-red-600">NCERT is non-negotiable!</strong>
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-10">
          {resources.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200"
              >
                {/* Section Header */}
                <div
                  className={`bg-gradient-to-r ${section.color} text-white p-6`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-10 h-10" />
                    <h3 className="text-2xl md:text-3xl font-black">
                      {section.section}
                    </h3>
                  </div>
                </div>

                {/* Resource Items */}
                <div className="p-6">
                  <div className="grid gap-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        whileHover={{ scale: 1.01, x: 5 }}
                        className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all border-2 border-gray-200"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              item.type === "NCERT"
                                ? "bg-green-100 text-green-800"
                                : item.type === "Book"
                                ? "bg-blue-100 text-blue-800"
                                : item.type === "Report"
                                ? "bg-purple-100 text-purple-800"
                                : item.type === "Government"
                                ? "bg-indigo-100 text-indigo-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {item.type}
                          </span>
                          <span className="text-base font-semibold text-gray-800">
                            {item.name}
                          </span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${
                            priorityColors[item.priority]
                          }`}
                        >
                          {item.priority === "critical" && "🔥 CRITICAL"}
                          {item.priority === "high" && "⚡ HIGH"}
                          {item.priority === "medium" && "⭐ MEDIUM"}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <h3 className="text-3xl font-black mb-6 text-center flex items-center justify-center gap-3">
            <Star className="w-8 h-8" />
            Resource Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border-2 border-white/30">
              <p className="font-bold mb-2">✅ Do:</p>
              <ul className="space-y-2 text-sm">
                <li>• Read NCERT first (especially Geography!)</li>
                <li>• Use atlas weekly for Geography</li>
                <li>• Link current affairs with static content</li>
                <li>• Make notes from Economic Survey</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border-2 border-white/30">
              <p className="font-bold mb-2">❌ Don't:</p>
              <ul className="space-y-2 text-sm">
                <li>• Skip NCERT for any section</li>
                <li>• Read too many books (quality {">"} quantity)</li>
                <li>• Ignore government reports</li>
                <li>• Study Geography without atlas</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

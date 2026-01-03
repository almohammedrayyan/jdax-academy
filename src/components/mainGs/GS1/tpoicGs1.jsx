import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  Landmark,
  BookOpen,
  Users,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const sections = [
  {
    id: "culture",
    title: "Section 1: Indian Heritage and Culture",
    icon: Landmark,
    color: "purple",
    topics: [
      {
        number: 1,
        title: "Indian Culture - Art Forms, Literature, Architecture",
        syllabus:
          "Indian culture will cover the salient aspects of Art Forms, literature and Architecture from ancient to modern times.",
        breakdown: [
          "🎨 Art Forms: Painting (Miniature, Mughal, Pahari, Rajput, Tanjore, Mysore), Dance (8 classical forms), Music (Hindustani vs Carnatic, gharanas)",
          "📚 Literature: Ancient (Vedic, Epics, Sanskrit), Medieval (Bhakti-Sufi, regional languages), Modern (Nationalist, contemporary)",
          "🏛️ Architecture: Temple (Nagara, Dravidian, Vesara), Indo-Islamic (Sultanate, Mughal), Colonial (Indo-Saracenic, Gothic), Modern",
        ],
        upscLoves:
          "Temple architecture comparison, classical dance features, Bhakti-Sufi literature, UNESCO World Heritage Sites, syncretism in culture",
        priority: "medium",
      },
    ],
  },
  {
    id: "history",
    title: "Section 2: History",
    icon: BookOpen,
    color: "blue",
    topics: [
      {
        number: 2,
        title: "Modern Indian History",
        syllabus:
          "Modern Indian history from about the middle of the eighteenth century until the present.",
        breakdown: [
          "📊 Economic: Drain of wealth, deindustrialization, land revenue systems",
          "👥 Social: Reform movements, education policies",
          "⚖️ Administrative: Constitutional developments",
          "🏭 Impact: British policies on economy and society",
        ],
        upscLoves:
          "Colonial economic impact, land revenue systems, tribal/peasant revolts",
        priority: "high",
      },
    ],
  },
];

/* ---------------- TOPIC CARD ---------------- */

function TopicCard({ topic, sectionColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const colorClasses = {
    purple: "border-purple-600 bg-gradient-to-br from-purple-500 to-purple-700",
    blue: "border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700",
    rose: "border-rose-600 bg-gradient-to-br from-rose-500 to-rose-700",
    teal: "border-teal-600 bg-gradient-to-br from-teal-500 to-teal-700",
  };

  const priorityConfig = {
    critical: { label: "CRITICAL 🔥", color: "from-red-600 to-red-700" },
    high: { label: "HIGH ⚡", color: "from-orange-600 to-orange-700" },
    medium: { label: "MEDIUM ⭐", color: "from-yellow-600 to-yellow-700" },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`bg-white shadow-xl border-l-8 rounded-r-2xl overflow-hidden ${
        colorClasses[sectionColor].split(" ")[0]
      }`}
    >
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${colorClasses[sectionColor]} text-white p-6 cursor-pointer`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black">{topic.title}</h3>
            <div
              className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                priorityConfig[topic.priority].color
              }`}
            >
              {priorityConfig[topic.priority].label}
            </div>
          </div>

          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown className="w-6 h-6" />
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
            className="p-6 bg-gray-50 space-y-6"
          >
            <div>
              <h4 className="font-black text-blue-700 flex gap-2 items-center">
                <Target className="w-5 h-5" /> UPSC Syllabus
              </h4>
              <p className="italic text-gray-700 mt-2">"{topic.syllabus}"</p>
            </div>

            <div>
              <h4 className="font-black text-green-700 flex gap-2 items-center">
                <TrendingUp className="w-5 h-5" /> Topic Breakdown
              </h4>
              <ul className="mt-3 space-y-2">
                {topic.breakdown.map((item, i) => (
                  <li key={i} className="text-gray-800">
                    ▸ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-100 p-4 rounded-lg">
              <h4 className="font-black text-amber-800">⭐ What UPSC Loves</h4>
              <p className="mt-2 font-semibold text-gray-800">
                {topic.upscLoves}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function GS1TopicSections() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-emerald-700">
            📚 Complete Syllabus Breakdown
          </h2>
          <p className="text-lg text-gray-600 font-semibold">
            GS-1 Topics with UPSC-focused Analysis
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id}>
                <div className="mb-6 bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl text-white shadow-xl flex gap-4 items-center">
                  <Icon className="w-10 h-10" />
                  <h3 className="text-2xl font-black">{section.title}</h3>
                </div>

                <div className="space-y-6">
                  {section.topics.map((topic) => (
                    <TopicCard
                      key={topic.number}
                      topic={topic}
                      sectionColor={section.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

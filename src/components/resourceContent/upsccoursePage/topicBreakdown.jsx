import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  ChevronRight,
  Globe,
  BookOpen,
  MapPin,
  Building,
  TrendingUp,
  Leaf,
  Zap,
  Clock,
  Target,
  Users,
  Award,
  Lightbulb,
  FileText,
  ExternalLink,
} from "lucide-react";

const topics = [
  {
    id: 1,
    title: "Current Events of National and International Importance",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    questions: "20-25",
    weightage: "25%",
    description:
      "Most dynamic and highest-scoring section with long-term significance events",
    jdaxDeconstruction: {
      quote: "Most aspirants read the syllabus. Toppers DECODE it!",
      breakdowns: [
        {
          term: "Current Events",
          meaning:
            "Happenings in the last 12-18 months atleast (not just last 3 months!)",
        },
        {
          term: "National",
          meaning:
            "Indian domestic issues (policies, schemes, social issues, controversies)",
        },
        {
          term: "International",
          meaning:
            "Global events affecting India's interests or having worldwide impact",
        },
        {
          term: "Importance",
          meaning: "Events with long-term significance, not daily news gossip",
        },
      ],
      smartApproach:
        "Link current news with History/Polity/Geography/Economy and Social Sector/Environment/Science & Tech (Remaining Topics in Prelims Syllabus) concepts!",
    },
    keyPoints: [
      "Events in the last 12-18 months (not just last 3 months)",
      "National: Indian domestic policies, schemes, social issues",
      "International: Global events affecting India's interests",
      "Link current news with other syllabus topics",
    ],
    whatUpscAsks: [
      "Government policies and their impact",
      "International relations and geopolitics",
      "Social, economic, and environmental implications",
    ],
    commonMistake:
      "Students memorize current affairs randomly without connecting to other topics",
    resources: [
      "The Hindu & Indian Express (Daily)",
      "PIB Press Releases (Government)",
      "Economic Survey & Union Budget",
      "Yojana & Kurukshetra magazines",
      "Sansad TV - Perspective & Policy Watch",
    ],
  },
  {
    id: 2,
    title: "History of India and Indian National Movement",
    icon: BookOpen,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    questions: "15-20",
    weightage: "18%",
    description:
      "Ancient, Medieval, Modern India with focus on freedom struggle post-1857",
    jdaxDeconstruction: {
      quote: "Don't memorize dates! Understand cause-effect relationships.",
      breakdowns: [
        {
          term: "History of India",
          meaning:
            "Ancient, Medieval, and Modern India (focus on major dynasties, cultural developments, socio-religious movements)",
        },
        {
          term: "Indian National Movement",
          meaning:
            "Freedom struggle from 1857 onwards (emphasis on post-1885 organized movements)",
        },
      ],
      smartApproach:
        "Don't memorize dates! Understand cause-effect relationships, compare different movements, link with current Indian polity and society!",
    },
    keyPoints: [
      "Ancient & Medieval: Major dynasties, cultural developments",
      "National Movement: Freedom struggle from 1857 onwards",
      "Constitutional development and key personalities",
      "Social reform movements and ideologies",
    ],
    whatUpscAsks: [
      "Freedom fighters and their ideologies",
      "Major movements (1857, Non-Cooperation, Civil Disobedience)",
      "Constitutional Acts (1909, 1919, 1935, 1947)",
      "Art, culture, and architectural heritage",
    ],
    commonMistake:
      "Focus only on freedom struggle, ignore ancient/medieval and cultural aspects",
    resources: [
      "NCERT Class 6-12 History",
      "India's Struggle for Independence - Bipin Chandra",
      "A Brief History of Modern India - Spectrum",
      "Indian Culture Portal (Government)",
      "ASI & National Archives resources",
    ],
  },
  {
    id: 3,
    title: "Indian and World Geography",
    icon: MapPin,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    questions: "15-18",
    weightage: "17%",
    description:
      "Physical, Social & Economic Geography of India and the World equally",
    jdaxDeconstruction: {
      quote: "Study with 3 lenses: Physical, Social, and Economic!",
      breakdowns: [
        {
          term: "Physical Geography",
          meaning:
            "Relief features, drainage systems, climate, natural vegetation, soils, natural resources",
        },
        {
          term: "Social Geography",
          meaning:
            "Population distribution, settlements, migration, demographics, cultural aspects, social issues",
        },
        {
          term: "Economic Geography",
          meaning:
            "Agriculture, industries, minerals, energy, transportation, trade patterns",
        },
        {
          term: "India and the World",
          meaning:
            "Equal focus on both India's geography AND global geography (50-50 split roughly)",
        },
      ],
      smartApproach:
        "Always study with 3 lenses for any topic: (1) Physical → Natural features? (2) Social → Who lives there? What patterns? (3) Economic → What do they produce? What industries? What resources?",
    },
    keyPoints: [
      "Physical: Relief, climate, rivers, soils, resources",
      "Social: Population, settlements, migration, demographics",
      "Economic: Agriculture, industries, minerals, trade",
      "Equal focus on India and World geography",
    ],
    whatUpscAsks: [
      "Indian monsoon and rainfall patterns",
      "Population distribution and urbanization trends",
      "Agricultural regions and industrial corridors",
      "World climate zones and ocean currents",
    ],
    commonMistake:
      "Study only physical geography, ignore social & economic aspects",
    resources: [
      "NCERT Class 6-12 Geography",
      "Oxford School Atlas (Essential)",
      "Certificate Geography - GC Leong",
      "Daily map practice with current affairs",
      "Government geographical data",
    ],
  },
  {
    id: 4,
    title: "Indian Polity and Governance",
    icon: Building,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    questions: "25-30",
    weightage: "28%",
    description:
      "Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues",
    jdaxDeconstruction: {
      quote: "Study Polity & Governance through 5 specific dimensions!",
      breakdowns: [
        {
          term: "Constitution",
          meaning:
            "Constitutional provisions, Articles, Schedules, Amendments, Fundamental Rights, DPSP, Emergency provisions",
        },
        {
          term: "Political System",
          meaning:
            "Electoral system, political parties, coalition politics, anti-defection law, election commission, democratic processes",
        },
        {
          term: "Panchayati Raj",
          meaning:
            "73rd & 74th Amendments, local self-governance (rural & urban), decentralization, 3-tier structure, powers & functions",
        },
        {
          term: "Public Policy",
          meaning:
            "Policy formulation & implementation, welfare schemes, government programs, bureaucracy role, policy reforms",
        },
        {
          term: "Rights Issues",
          meaning:
            "Fundamental Rights enforcement, PIL, judicial activism, social justice, Constitutional remedies, human rights",
        },
      ],
      smartApproach:
        "For any polity question, identify which dimension it falls under. Example: Women's Reservation Bill 2023 touches ALL 5 dimensions - that's how UPSC designs questions!",
    },
    keyPoints: [
      "Constitution: Articles, Schedules, Amendments, FR, DPSP",
      "Political System: Elections, parties, anti-defection",
      "Panchayati Raj: 73rd & 74th Amendments, local governance",
      "Public Policy: Government schemes and implementation",
    ],
    whatUpscAsks: [
      "Constitutional provisions and landmark judgments",
      "Structure and powers of institutions",
      "Parliamentary procedures and recent Bills",
      "Local governance and decentralization",
    ],
    commonMistake: "Memorizing without understanding institutional functioning",
    resources: [
      "NCERT Class 9-12 Political Science",
      "Indian Polity - M. Laxmikanth",
      "Constitution of India (Bare Act)",
      "PRS Legislative Research",
      "Supreme Court judgments",
    ],
  },
  {
    id: 5,
    title: "Economic and Social Development",
    icon: TrendingUp,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    questions: "20-25",
    weightage: "23%",
    description:
      "Sustainable Development, Poverty, Inclusion, Demographics, Social Sector",
    jdaxDeconstruction: {
      quote: "Study Economic & Social Development through 5 critical lenses!",
      breakdowns: [
        {
          term: "Sustainable Development",
          meaning:
            "Is development environmentally sustainable? Green growth? SDGs progress?",
        },
        {
          term: "Poverty",
          meaning:
            "Is development reducing poverty? BPL trends? Poverty alleviation schemes working?",
        },
        {
          term: "Inclusion",
          meaning:
            "Is development inclusive? Financial inclusion, digital inclusion, social inclusion happening?",
        },
        {
          term: "Demographics",
          meaning:
            "How do population trends affect development? Demographic dividend utilized? Ageing challenges?",
        },
        {
          term: "Social Sector Initiatives",
          meaning:
            "What government programs drive social development? Health, education, nutrition schemes?",
        },
      ],
      smartApproach:
        "Don't just study economics and social issues generally. Study them SPECIFICALLY through these 5 critical lenses that matter for India's development!",
    },
    keyPoints: [
      "Economic concepts: Inflation, fiscal & monetary policy",
      "Agriculture: MSP, food security, rural development",
      "Government schemes: Implementation and outcomes",
      "Social indicators: Health, education, demographics",
    ],
    whatUpscAsks: [
      "Banking sector and financial inclusion",
      "Government welfare schemes details",
      "SDG progress and development indicators",
      "Agriculture and food security policies",
    ],
    commonMistake: "Ignore statistics and social sector scheme details",
    resources: [
      "NCERT Class 9-12 Economics",
      "Economic Survey & Union Budget",
      "Yojana & Kurukshetra magazines",
      "NITI Aayog reports",
      "RBI & Ministry of Finance data",
    ],
  },
  {
    id: 6,
    title: "Environmental Ecology, Bio-diversity and Climate Change",
    icon: Leaf,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    questions: "12-15",
    weightage: "14%",
    description: "General issues that do not require subject specialization",
    jdaxDeconstruction: {
      quote: "Stay at general awareness level - not PhD-level ecology!",
      breakdowns: [
        {
          term: "General issues",
          meaning:
            "Current, practical, real-world problems in NEWS (deforestation, pollution, species extinction, global warming) - NOT theoretical concepts or research-level details",
        },
        {
          term: "Environmental Ecology",
          meaning:
            "Ecosystems, human-environment interaction, pollution control, resource management - NOT detailed food web calculations or succession stages",
        },
        {
          term: "Bio-diversity",
          meaning:
            "Variety of life forms, conservation efforts, biodiversity hotspots, wildlife protection laws - NOT taxonomy details or genetic sequencing",
        },
        {
          term: "Climate Change",
          meaning:
            "Global warming causes/impacts, greenhouse gases, climate agreements (Paris, Kyoto), India's climate action - NOT atmospheric physics or complex climate models",
        },
        {
          term: "Do not require subject specialization",
          meaning:
            "Focus on current issues in news, basic concepts, government policies, and how environment links with development - NOT like an environmental science post-grad student!",
        },
      ],
      smartApproach:
        "3-Layer Study: (1) Basic Concepts from NCERT (2) Current Issues from newspapers (3) Government Initiatives from reports. Total depth: General awareness level, NOT specialization!",
    },
    keyPoints: [
      "Basic concepts: Ecosystems, biodiversity, climate change",
      "Current environmental issues in news",
      "Government policies and international agreements",
      "Conservation efforts and protected areas",
    ],
    whatUpscAsks: [
      "Biodiversity hotspots and endemic species",
      "International environmental conventions",
      "Climate change impacts and mitigation",
      "Pollution control and renewable energy",
    ],
    commonMistake:
      "Going too deep into scientific theories instead of current issues",
    resources: [
      "NCERT Class 11-12 Biology (Environment chapters)",
      "Ministry of Environment reports",
      "State of Forest Report",
      "Down to Earth magazine",
      "UNFCCC & climate summit outcomes",
    ],
  },
  {
    id: 7,
    title: "General Science",
    icon: Zap,
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
    questions: "12-18",
    weightage: "15%",
    description:
      "Science in day-to-day life, recent discoveries, space & technology",
    jdaxDeconstruction: {
      quote: "Understand the 'why' and 'how' behind phenomena - not formulas!",
      breakdowns: [
        {
          term: "General Science",
          meaning:
            "Basic concepts from Physics, Chemistry, Biology applicable to everyday life",
        },
        {
          term: "Focus areas",
          meaning:
            "Science in day-to-day life, scientific phenomena, health & diseases, space & technology, inventions & discoveries",
        },
        {
          term: "NOT asked",
          meaning:
            "Complex formulas, derivations, or deep theoretical concepts",
        },
        {
          term: "ACTUALLY asked",
          meaning:
            "Applications, why things work, recent discoveries, science behind news",
        },
      ],
      smartApproach:
        "Don't mug up facts! Understand the 'why' and 'how' behind phenomena. Link science with current affairs (new drugs, space missions, technologies)!",
    },
    keyPoints: [
      "Physics: Light, sound, heat, electricity applications",
      "Chemistry: Everyday chemicals, acids-bases, metals",
      "Biology: Human body, diseases, vaccines, genetics",
      "Technology: AI, space science, biotechnology basics",
    ],
    whatUpscAsks: [
      "ISRO missions and space exploration",
      "Recent scientific discoveries and Nobel Prizes",
      "Health and disease-related developments",
      "Technology applications in governance",
    ],
    commonMistake: "Either ignore completely or go too deep into theory",
    resources: [
      "NCERT Class 6-12 Science",
      "ISRO official website",
      "Vigyan Prasar resources",
      "Science & Technology news",
      "Government S&T ministry updates",
    ],
  },
];

export function TopicSections({ refProp }) {
  const [openSections, setOpenSections] = useState([]);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const toggleSection = (topicId) => {
    setOpenSections((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <section id="topics" className="py-20 bg-white" ref={refProp}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Interactive <span className="text-blue-600">Topic Breakdown</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Detailed analysis of all 7 topics with expert insights, study
            strategies, and resource recommendations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const isOpen = openSections.includes(topic.id);

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${topic.borderColor} group rounded-md bg-white`}
                >
                  <div
                    className="p-6 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(topic.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        toggleSection(topic.id);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-full ${topic.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${topic.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          Topic {topic.id}: {topic.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {topic.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{topic.questions} questions</span>
                        </div>
                        <div className={`text-lg font-bold ${topic.color}`}>
                          {topic.weightage}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-6">
                      {topic.jdaxDeconstruction && (
                        <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border-2 border-amber-300 shadow-md">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 bg-amber-100 rounded-lg">
                              <Award className="w-6 h-6 text-amber-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-amber-900 mb-2 text-lg">
                                🎯 JDAX Deconstruction of Syllabus
                              </h4>
                              <p className="text-sm italic text-amber-800 bg-white/60 px-3 py-2 rounded border border-amber-200">
                                "{topic.jdaxDeconstruction.quote}"
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            {topic.jdaxDeconstruction.breakdowns.map(
                              (breakdown, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white/80 p-3 rounded border border-amber-200"
                                >
                                  <div className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 mt-1 text-amber-600 flex-shrink-0" />
                                    <div>
                                      <span className="font-semibold text-amber-900">
                                        "{breakdown.term}"
                                      </span>
                                      <span className="text-gray-700">
                                        {" "}
                                        = {breakdown.meaning}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          <div className="bg-amber-100 p-3 rounded border border-amber-300">
                            <p className="text-sm font-medium text-amber-900">
                              <span className="font-bold">
                                💡 Smart Approach:
                              </span>{" "}
                              {topic.jdaxDeconstruction.smartApproach}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                          className={`p-4 rounded-lg ${topic.bgColor} border ${topic.borderColor}`}
                        >
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-600" />
                            Key Points
                          </h4>
                          <ul className="space-y-2">
                            {topic.keyPoints?.map((point, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 flex items-start gap-2"
                              >
                                <ChevronRight className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-600" />
                            What UPSC Actually Asks
                          </h4>
                          <ul className="space-y-2">
                            {topic.whatUpscAsks?.map((point, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 flex items-start gap-2"
                              >
                                <ChevronRight className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {topic.commonMistake && (
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                            <Award className="w-5 h-5 text-red-600" />
                            Common Mistake
                          </h4>
                          <p className="text-sm text-red-700">
                            {topic.commonMistake}
                          </p>
                        </div>
                      )}

                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Recommended Resources
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {topic.resources?.map((resource, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-blue-700 bg-white px-3 py-2 rounded border"
                            >
                              <ExternalLink className="w-4 h-4 flex-shrink-0" />
                              {resource}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
          "Modern Indian history from about the middle of the eighteenth century until the present- significant events, personalities, issues.",
        breakdown: [
          "📊 Economic: Drain of wealth, deindustrialization, land revenue systems (Permanent, Ryotwari, Mahalwari)",
          "👥 Social: Reform movements (Raja Ram Mohan Roy, Vivekananda, Ambedkar), education policies",
          "⚖️ Administrative: Constitutional developments (Acts 1773-1935, Government of India Act)",
          "🏭 Impact: British policies on economy, society, agriculture, industry",
        ],
        upscLoves:
          "Colonial economic impact, land revenue systems, tribal/peasant revolts, social reform movements, constitutional evolution",
        priority: "high",
      },
      {
        number: 3,
        title: "Freedom Struggle - Stages and Contributors",
        syllabus:
          "The Freedom Struggle — its various stages and important contributors/contributions from different parts of the country.",
        breakdown: [
          "📅 Stages: 1885-1905 (Moderate phase), 1905-1918 (Extremist phase), 1919-1939 (Gandhian movements), 1939-1947 (Quit India)",
          "🌍 Regional Diversity: Bengal, Maharashtra, Tamil Nadu, Punjab, Kerala, Northeast movements",
          "⚔️ Parallel Streams: Revolutionary movement (Bhagat Singh, Chandrashekhar Azad), Left-wing movements",
          "👩 Women's Role: Sarojini Naidu, Annie Besant, Kamaladevi Chattopadhyay, women's participation",
        ],
        upscLoves:
          "Gandhian movements (ALMOST EVERY YEAR!), revolutionary movement, women's role in freedom struggle, regional variations",
        priority: "critical",
      },
      {
        number: 4,
        title: "Post-Independence Consolidation & Reorganization",
        syllabus:
          "Post-independence consolidation and reorganization within the country.",
        breakdown: [
          "🗺️ Political: Princely states integration (Sardar Patel), linguistic reorganization (States Reorganization Act 1956)",
          "💰 Economic: Land reforms (Zamindari abolition), Five-Year Plans, Planning Commission establishment",
          "👥 Social: Hindu Code Bills, reservation policy, social justice measures",
          "🏛️ Administrative: Institution building (Election Commission, Supreme Court, bureaucracy)",
        ],
        upscLoves:
          "Land reforms effectiveness, linguistic reorganization merits/demerits, Hindu Code Bills significance, Patel's integration",
        priority: "high",
      },
      {
        number: 5,
        title: "World History (18th Century Onwards)",
        syllabus:
          "History of the world will include events from 18th century such as industrial revolution, world wars, redrawal of national boundaries, colonization, decolonization, political philosophies.",
        breakdown: [
          "🏭 Industrial Revolution: Impacts on economy, society, urbanization, labor movements",
          "⚔️ World Wars: WWI & WWII causes, consequences, Treaty of Versailles, impact on decolonization",
          "🌍 Decolonization: Africa vs Asia comparison, boundary redrawals (Sykes-Picot, Berlin Conference)",
          "📖 Political Philosophies: Communism, capitalism, socialism, fascism - forms and societal effects",
        ],
        upscLoves:
          "WWI/WWII impacts, Cold War dynamics, decolonization processes, French Revolution influence, political philosophies comparison",
        priority: "high",
      },
    ],
  },
  {
    id: "society",
    title: "Section 3: Society",
    icon: Users,
    color: "rose",
    topics: [
      {
        number: 6,
        title: "Salient Features of Indian Society, Diversity",
        syllabus: "Salient features of Indian Society, Diversity of India.",
        breakdown: [
          "🌈 Features: Unity in diversity, pluralism, syncretism, caste system evolution, joint family system",
          "🗣️ Diversity: Linguistic (22 scheduled languages), religious (6 major religions), ethnic, cultural, regional",
          "🤝 Challenges: Maintaining unity amidst diversity, cultural pluralism in globalized world",
          "💪 Strengths: Cultural adaptability, tolerance, composite culture",
        ],
        upscLoves:
          "Unity in diversity challenges, factors promoting/threatening national unity, cultural pluralism, diversity vs uniformity debate",
        priority: "medium",
      },
      {
        number: 7,
        title: "Women, Population, Poverty, Urbanization",
        syllabus:
          "Role of women and women's organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies.",
        breakdown: [
          "👩 Women: Political participation barriers, gender inequality, women's movements, workforce participation challenges, violence against women",
          "📊 Population: Demographic dividend, sex ratio imbalance, aging society, migration patterns, population stabilization",
          "💵 Poverty: Estimation debates (Tendulkar, Rangarajan, Multidimensional Poverty Index), poverty alleviation programs effectiveness",
          "🏙️ Urbanization: Challenges (slums, infrastructure deficit, pollution), solutions (Smart Cities, AMRUT, PMAY), urban governance",
        ],
        upscLoves:
          "Women's reservation debate, demographic dividend utilization, urbanization challenges (ALMOST EVERY YEAR!), poverty estimation methodology",
        priority: "critical",
      },
      {
        number: 8,
        title: "Effects of Globalization on Indian Society",
        syllabus: "Effects of globalization on Indian society.",
        breakdown: [
          "📱 Cultural Impact: Consumerism rise, Westernization, homogenization vs heterogenization of culture",
          "📈 Inequality: Widening gap between urban-rural, rich-poor, digital divide",
          "⚖️ Values Conflict: Traditional vs modern values, family structure changes, individualism vs collectivism",
          "✅ Positives: Exposure to global ideas, economic opportunities, technological advancement, cultural exchange",
        ],
        upscLoves:
          "Cultural erosion vs enrichment debate, globalization and inequality, Indian society's response, glocalization concept",
        priority: "high",
      },
      {
        number: 9,
        title: "Social Empowerment, Communalism, Regionalism, Secularism",
        syllabus: "Social empowerment, communalism, regionalism & secularism.",
        breakdown: [
          "💪 Social Empowerment: SC/ST/OBC/minorities/women/disabled - affirmative action, reservation debates, empowerment vs entitlement",
          "🕊️ Communalism: Causes (historical, political, economic), remedies, communal harmony promotion, role of media",
          "🗺️ Regionalism: Regional identities vs national integration, linguistic movements, state autonomy demands",
          "⚖️ Secularism: Indian model vs Western, challenges (majority-minority relations), Uniform Civil Code debate",
        ],
        upscLoves:
          "Secularism challenges (ALMOST EVERY YEAR!), reservation policy debates, communalism causes and solutions, regionalism vs nationalism",
        priority: "critical",
      },
    ],
  },
  {
    id: "geography",
    title: "Section 4: Geography",
    icon: Globe,
    color: "teal",
    topics: [
      {
        number: 10,
        title: "Salient Features of World's Physical Geography",
        syllabus: "Salient features of world's physical geography.",
        breakdown: [
          "🏔️ Landforms: Mountains (fold, block, volcanic), plateaus, plains (formation processes, types, global distribution)",
          "🌊 Water Bodies: Ocean currents (warm/cold), impact on climate, major rivers, glaciers, water cycle",
          "🌡️ Climate: Climate zones (tropical, temperate, polar), atmospheric circulation, monsoon mechanism (global), El Niño/La Niña",
          "🌳 Vegetation: Forest types (tropical, temperate, boreal), grasslands, deserts, tundra - distribution and characteristics",
        ],
        upscLoves:
          "Ocean currents-climate linkage, mountain formation theories, climate zones-vegetation correlation, atmospheric circulation patterns",
        priority: "high",
      },
      {
        number: 11,
        title: "Natural Resources Distribution & Industrial Location",
        syllabus:
          "Distribution of key natural resources across the world (including South Asia and the Indian subcontinent); factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India).",
        breakdown: [
          "⛏️ Minerals: Iron ore, coal, petroleum, bauxite, copper - global distribution, major producers",
          "⚡ Energy: Fossil fuels, renewable energy potential (solar, wind, hydro), energy geopolitics",
          "🏭 Industries: Primary (agriculture, mining), Secondary (manufacturing - Weber's theory), Tertiary (services) - location factors",
          "🌏 Special Focus: South Asia resources, Indian subcontinent mineral wealth, industrial corridors in India",
        ],
        upscLoves:
          "Energy resource distribution and geopolitics, industrial location factors (raw material, market, labor), renewable energy potential",
        priority: "high",
      },
      {
        number: 12,
        title: "Geophysical Phenomena & Critical Geographical Changes",
        syllabus:
          "Important Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone etc., geographical features and their location-changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna and the effects of such changes.",
        breakdown: [
          "🌋 Phenomena: Earthquakes (plate tectonics, Ring of Fire), tsunamis (causes, 2004 Indian Ocean), volcanoes (types, distribution), cyclones (formation, naming)",
          "❄️ Glacier Changes: Himalayan glaciers retreat, polar ice caps melting, glacial lake outburst floods (GLOFs)",
          "💧 Water Bodies: Shrinking (Aral Sea, Dead Sea, Lake Chad), sea level rise, coastal erosion, coral bleaching",
          "🌿 Biodiversity: Flora and fauna changes, habitat loss, climate change impacts, species migration, conservation challenges",
        ],
        upscLoves:
          "Glacier retreat impacts on rivers (REGULAR!), climate change and geography, disaster preparedness, geographical feature changes",
        priority: "critical",
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

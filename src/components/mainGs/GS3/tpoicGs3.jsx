import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Cpu,
  Leaf,
  Shield,
  AlertTriangle,
  ChevronDown,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

export default function GS3TopicSections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [openTopic, setOpenTopic] = useState(0);

  const topics = [
    // SECTION 1: ECONOMIC DEVELOPMENT (Topics 1-16)
    {
      id: 1,
      section: "Economic Development",
      sectionColor: "cyan",
      title:
        "Indian Economy - Planning, Mobilization, Growth, Development, Employment",
      priority: "CRITICAL",
      syllabus:
        "Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment.",
      breakdown: [
        "Economic growth vs development distinction",
        "Resource mobilization challenges (tax-GDP ratio, disinvestment)",
        "Employment generation issues (jobless growth, gig economy)",
        "NITI Aayog vs Planning Commission transition",
        "Formal vs informal sector employment",
      ],
      whatUPSCAsks: [
        "Jobless growth phenomenon",
        "NITI Aayog's role vs Planning Commission",
        "Structural reforms for employment generation",
        "Gig economy regulation",
      ],
      resources:
        "Economic Survey (Growth chapter), NCERT Class 11-12 Economics, Ramesh Singh",
    },
    {
      id: 2,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Inclusive Growth",
      priority: "CRITICAL",
      syllabus: "Inclusive growth and issues arising from it.",
      breakdown: [
        "Inequality (income, regional, gender)",
        "Financial inclusion (Jan Dhan, micro-credit)",
        "Social security (MGNREGA, PM-KISAN)",
        "Skill development challenges",
        "Digital divide issues",
      ],
      whatUPSCAsks: [
        "Growth not translating to development",
        "Regional inequality (North-South divide)",
        "Financial inclusion effectiveness",
        "Digital divide in rural areas",
      ],
      resources:
        "Economic Survey, NITI Aayog SDG India Index, Inequality reports",
    },
    {
      id: 3,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Government Budgeting",
      priority: "HIGH",
      syllabus: "Government Budgeting.",
      breakdown: [
        "Budget components (revenue budget, capital budget)",
        "Fiscal deficit, revenue deficit, primary deficit",
        "FRBM Act provisions and amendments",
        "Budget-making process",
        "Outcome budgeting",
      ],
      whatUPSCAsks: [
        "Fiscal consolidation vs growth trade-off",
        "Off-budget borrowings",
        "FRBM targets and deviations",
        "Outcome vs output budgeting",
      ],
      resources:
        "Union Budget documents, PRS India budget analysis, Economic Survey (Fiscal chapter)",
    },
    {
      id: 4,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Major Crops - Cropping Patterns",
      priority: "HIGH",
      syllabus:
        "Major crops-cropping patterns in various parts of the country.",
      breakdown: [
        "Crop distribution (rice, wheat, cotton, sugarcane belts)",
        "Climate-crop correlation",
        "Crop diversification needs",
        "Shift from food crops to cash crops",
        "Climate change impact on cropping patterns",
      ],
      whatUPSCAsks: [
        "Food crops to cash crops shift",
        "Climate change impact on agriculture",
        "Crop diversification challenges",
        "Regional cropping patterns",
      ],
      resources:
        "NCERT Class 11 Geography, Ministry of Agriculture crop statistics",
    },
    {
      id: 5,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Irrigation Systems",
      priority: "HIGH",
      syllabus: "Different types of irrigation and irrigation systems.",
      breakdown: [
        "Types: surface, groundwater, drip, sprinkler",
        "Major irrigation projects",
        "Water management and conservation",
        "Groundwater depletion issues",
        "Micro-irrigation promotion",
      ],
      whatUPSCAsks: [
        "Groundwater depletion crisis",
        "Micro-irrigation benefits and adoption",
        "River linking debate",
        "Water use efficiency",
      ],
      resources:
        "NCERT Geography, Ministry of Jal Shakti, NITI Aayog water reports",
    },
    {
      id: 6,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Storage, Transport, Marketing - Agricultural Constraints",
      priority: "CRITICAL",
      syllabus:
        "Storage, transport and marketing of agricultural produce and issues and related constraints.",
      breakdown: [
        "Cold storage gaps",
        "Supply chain inefficiencies",
        "APMC reforms (e-NAM)",
        "Middlemen exploitation",
        "Farmer distress causes",
      ],
      whatUPSCAsks: [
        "MSP vs market reforms debate",
        "APMC monopoly issues",
        "e-NAM effectiveness",
        "Post-harvest losses",
      ],
      resources:
        "Economic Survey (Agriculture chapter), Ministry of Agriculture, NITI Aayog",
    },
    {
      id: 7,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "E-Technology for Farmers",
      priority: "MEDIUM",
      syllabus: "e-technology in the aid of farmers.",
      breakdown: [
        "Kisan Credit Card digitization",
        "PM-KISAN direct benefit transfer",
        "e-NAM platform",
        "Weather forecasting apps",
        "Soil health cards digital",
      ],
      whatUPSCAsks: [
        "Digital divide in agriculture",
        "E-NAM adoption challenges",
        "Last-mile connectivity issues",
        "Digital payment adoption by farmers",
      ],
      resources: "Ministry of Agriculture, Digital India portal, e-NAM website",
    },
    {
      id: 8,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Farm Subsidies & MSP",
      priority: "CRITICAL",
      syllabus:
        "Issues related to direct and indirect farm subsidies and minimum support prices.",
      breakdown: [
        "Input subsidies (fertilizer, power, seeds)",
        "MSP mechanism and procurement",
        "WTO compliance issues",
        "Subsidy vs direct income support debate",
        "MSP legal guarantee demand",
      ],
      whatUPSCAsks: [
        "Subsidy rationalization",
        "MSP effectiveness and distortions",
        "WTO subsidy limits",
        "Direct income support vs subsidies",
      ],
      resources:
        "Economic Survey, CAG reports on subsidies, WTO agriculture agreements",
    },
    {
      id: 9,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Public Distribution System",
      priority: "CRITICAL",
      syllabus:
        "Public Distribution System- objectives, functioning, limitations, revamping; issues of buffer stocks and food security.",
      breakdown: [
        "TPDS (Targeted PDS) system",
        "NFSA 2013 provisions",
        "Buffer stock norms",
        "PDS leakages and pilferage",
        "DBT in PDS experiments",
      ],
      whatUPSCAsks: [
        "Universal vs targeted PDS debate",
        "One Nation One Ration Card success",
        "PDS leakages reduction",
        "Food security vs food surplus paradox",
      ],
      resources:
        "NFSA 2013, Economic Survey, CAG reports on PDS, Ministry of Consumer Affairs",
    },
    {
      id: 10,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Technology Missions",
      priority: "MEDIUM",
      syllabus: "Technology missions.",
      breakdown: [
        "Mission Indradhanush (immunization)",
        "Digital India Mission",
        "Swachh Bharat Mission",
        "Skill India Mission",
        "Make in India",
      ],
      whatUPSCAsks: [
        "Implementation challenges of missions",
        "Outcome vs output focus",
        "Mission mode effectiveness",
        "Convergence of missions",
      ],
      resources:
        "NITI Aayog, respective ministry websites, CAG performance audits",
    },
    {
      id: 11,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Animal Rearing Economics",
      priority: "MEDIUM",
      syllabus: "Economics of animal-rearing.",
      breakdown: [
        "White Revolution (Operation Flood)",
        "National Livestock Mission",
        "Fodder availability challenges",
        "Veterinary infrastructure gaps",
        "Climate impact from livestock emissions",
      ],
      whatUPSCAsks: [
        "Livestock's role in farmer income",
        "White Revolution success factors",
        "Livestock emissions vs livelihoods",
        "Fodder scarcity solutions",
      ],
      resources:
        "Economic Survey, Ministry of Fisheries & Animal Husbandry, NDDB reports",
    },
    {
      id: 12,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Food Processing Industries",
      priority: "HIGH",
      syllabus:
        "Food processing and related industries in India- scope and significance, location, upstream and downstream requirements, supply chain management.",
      breakdown: [
        "Mega Food Parks scheme",
        "Operation Greens for horticulture",
        "FDI in food retail",
        "Value addition in agriculture",
        "Cold chain infrastructure",
      ],
      whatUPSCAsks: [
        "Low processing levels (10% vs 60%+ globally)",
        "Farmer-processor linkages weak",
        "Cold chain gaps",
        "FDI in food retail pros/cons",
      ],
      resources:
        "Ministry of Food Processing Industries, Economic Survey, NITI Aayog",
    },
    {
      id: 13,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Land Reforms",
      priority: "HIGH",
      syllabus: "Land reforms in India.",
      breakdown: [
        "Tenancy reforms",
        "Land ceiling acts",
        "Consolidation of holdings",
        "Digitization of land records",
        "Forest Rights Act 2006",
      ],
      whatUPSCAsks: [
        "Incomplete land reforms",
        "Land acquisition conflicts",
        "Forest rights vs development",
        "Land records digitization",
      ],
      resources: "NITI Aayog land reforms reports, FRA 2006, Economic Survey",
    },
    {
      id: 14,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Liberalization Effects - Industrial Policy",
      priority: "CRITICAL",
      syllabus:
        "Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth.",
      breakdown: [
        "LPG reforms 1991 (Liberalization, Privatization, Globalization)",
        "Industrial licensing removal",
        "MSME promotion policies",
        "Labor reforms needs",
        "Manufacturing sector stagnation",
      ],
      whatUPSCAsks: [
        "Jobless growth post-liberalization",
        "Manufacturing stagnation (stuck at 15-17% of GDP)",
        "India vs China manufacturing comparison",
        "Labor reforms resistance",
      ],
      resources:
        "Economic Survey, NCERT Class 11 Economics, Industrial policy documents",
    },
    {
      id: 15,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Infrastructure - Energy, Ports, Roads, Airports, Railways",
      priority: "CRITICAL",
      syllabus: "Infrastructure: Energy, Ports, Roads, Airports, Railways etc.",
      breakdown: [
        "National Infrastructure Pipeline",
        "Renewable energy targets (500 GW by 2030)",
        "Ports modernization (Sagarmala)",
        "Road network expansion (Bharatmala)",
        "Railway modernization",
        "Logistics cost reduction",
      ],
      whatUPSCAsks: [
        "Infrastructure financing challenges",
        "PPP model issues in infrastructure",
        "Renewable energy transition challenges",
        "Logistics cost (13-14% vs 8% global)",
      ],
      resources:
        "Economic Survey (Infrastructure chapter), NITI Aayog, Ministry websites",
    },
    {
      id: 16,
      section: "Economic Development",
      sectionColor: "cyan",
      title: "Investment Models",
      priority: "HIGH",
      syllabus: "Investment models.",
      breakdown: [
        "FDI vs FII distinction",
        "PPP models (BOT, BOOT, HAM)",
        "Viability Gap Funding",
        "National Monetization Pipeline",
        "Infrastructure Investment Trusts (InvITs)",
      ],
      whatUPSCAsks: [
        "Asset monetization debate",
        "PPP project failures and lessons",
        "Risk allocation in PPP",
        "FDI policy reforms",
      ],
      resources:
        "Economic Survey, NITI Aayog NMP, DEA investment policy documents",
    },

    // SECTION 2: SCIENCE & TECHNOLOGY (Topics 17-20)
    {
      id: 17,
      section: "Science & Technology",
      sectionColor: "sky",
      title: "S&T Developments - Applications in Daily Life",
      priority: "CRITICAL",
      syllabus:
        "Science and Technology- developments and their applications and effects in everyday life.",
      breakdown: [
        "AI and ML applications",
        "Telemedicine and healthcare tech",
        "Fintech innovations (UPI, digital payments)",
        "E-governance platforms",
        "Smart cities technologies",
      ],
      whatUPSCAsks: [
        "Technology for inclusive development",
        "Digital public goods (UPI, Aadhaar)",
        "AI ethics and regulation",
        "Telemedicine benefits and challenges",
      ],
      resources:
        "The Hindu Science section, DST website, NITI Aayog tech reports",
    },
    {
      id: 18,
      section: "Science & Technology",
      sectionColor: "sky",
      title: "Indian Achievements in S&T",
      priority: "CRITICAL",
      syllabus: "Achievements of Indians in science & technology.",
      breakdown: [
        "ISRO missions (Chandrayaan, Gaganyaan, Aditya-L1, Mangalyaan)",
        "Space applications (remote sensing, communication)",
        "Atomic energy programs",
        "Vaccine development (Covaxin)",
        "Indigenous satellite navigation (NavIC)",
      ],
      whatUPSCAsks: [
        "Cost-effective space missions",
        "Vaccine diplomacy",
        "Space commercialization",
        "NavIC applications",
      ],
      resources: "ISRO website, DST, DBT, The Hindu Science section",
    },
    {
      id: 19,
      section: "Science & Technology",
      sectionColor: "sky",
      title: "Indigenization - New Technology Development",
      priority: "CRITICAL",
      syllabus: "Indigenization of technology and developing new technology.",
      breakdown: [
        "Atmanirbhar Bharat initiatives",
        "Make in India for defense",
        "PLI (Production Linked Incentive) schemes",
        "Import substitution strategies",
        "Technology transfer mechanisms",
      ],
      whatUPSCAsks: [
        "Defense indigenization (Tejas, Arjun)",
        "Semiconductor manufacturing push",
        "PLI scheme effectiveness",
        "Technology self-reliance challenges",
      ],
      resources: "Make in India portal, DRDO, Ministry of Electronics & IT",
    },
    {
      id: 20,
      section: "Science & Technology",
      sectionColor: "sky",
      title: "IT, Space, Computers, Robotics, Nano-tech, Bio-tech, IPR",
      priority: "CRITICAL",
      syllabus:
        "Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology and issues relating to intellectual property rights.",
      breakdown: [
        "Quantum computing developments",
        "AI/ML regulations",
        "Drone technology (Drone Rules 2021)",
        "Gene editing (CRISPR)",
        "Patent regimes (TRIPS, Doha Declaration)",
      ],
      whatUPSCAsks: [
        "Data privacy laws (need for data protection)",
        "IPR vs public health (vaccine patents)",
        "Space commercialization policy",
        "AI regulation frameworks",
      ],
      resources: "The Hindu, IT Ministry, DST, DBT, IPR policy documents",
    },

    // SECTION 3: ENVIRONMENT (Topic 21)
    {
      id: 21,
      section: "Environment",
      sectionColor: "teal",
      title: "Conservation, Pollution, Degradation, EIA",
      priority: "CRITICAL",
      syllabus:
        "Conservation, environmental pollution and degradation, environmental impact assessment.",
      breakdown: [
        "Conservation: Protected areas, Wildlife Protection Act 1972, Project Tiger, coastal regulation",
        "Pollution: Air (AQI, stubble burning), water (Ganga cleaning), soil (pesticides), noise",
        "Degradation: Deforestation, desertification, land degradation, biodiversity loss",
        "EIA: EIA Notification 2006 (amended 2020), public consultation, clearance process",
        "Climate change: Mitigation, adaptation, just transition, green growth",
      ],
      whatUPSCAsks: [
        "Climate change impacts and solutions (COP summits)",
        "Air quality crisis (AQI, stubble burning)",
        "EIA dilution concerns (2020 amendments)",
        "Conservation vs development conflicts",
      ],
      resources:
        "NCERT Class 11-12 Biology (Environment chapters), MoEFCC, Forest Survey of India, IPCC reports, Down to Earth magazine",
    },

    // SECTION 4: DISASTER MANAGEMENT (Topic 22)
    {
      id: 22,
      section: "Disaster Management",
      sectionColor: "cyan",
      title: "Disaster & Disaster Management",
      priority: "HIGH",
      syllabus: "Disaster and disaster management.",
      breakdown: [
        "Types: Natural (earthquakes, cyclones, floods, droughts) vs Man-made (industrial accidents, terrorism)",
        "DM Act 2005: NDMA, SDMA, DDMA structure",
        "Phases: Prevention, mitigation, preparedness, response, recovery, reconstruction",
        "NDRF deployment and operations",
        "Early warning systems (IMD, seismology)",
        "Sendai Framework 2015-2030",
      ],
      whatUPSCAsks: [
        "Disaster risk reduction strategies",
        "Climate change-disaster linkage",
        "Urban flooding causes and solutions",
        "Earthquake preparedness gaps",
      ],
      resources:
        "NDMA website, DM Act 2005, NDRF, IMD, Sendai Framework, NIDM publications",
    },

    // SECTION 5: SECURITY (Topics 23-28)
    {
      id: 23,
      section: "Security",
      sectionColor: "sky",
      title: "Development-Extremism Linkage",
      priority: "CRITICAL",
      syllabus: "Linkages between development and spread of extremism.",
      breakdown: [
        "Left Wing Extremism (LWE) geography",
        "Underdevelopment in Red Corridor states",
        "PESA implementation gaps",
        "Forest rights vs mining conflicts",
        "Holistic approach: security + development",
      ],
      whatUPSCAsks: [
        "LWE reduction strategies",
        "Development deficit in tribal areas",
        "PESA and FRA implementation",
        "Mining vs tribal rights conflict",
      ],
      resources: "MHA Annual Report (LWE chapter), NCRB data, The Hindu",
    },
    {
      id: 24,
      section: "Security",
      sectionColor: "sky",
      title: "External State & Non-State Actors",
      priority: "CRITICAL",
      syllabus:
        "Role of external state and non-state actors in creating challenges to internal security.",
      breakdown: [
        "Cross-border terrorism (Pakistan ISI)",
        "Proxy wars and hybrid warfare",
        "Insurgency in Northeast",
        "Foreign funding of NGOs/separatists",
        "Radicalization networks",
      ],
      whatUPSCAsks: [
        "Hybrid warfare tactics",
        "China's salami-slicing strategy",
        "Pakistan's proxy war",
        "Radicalization prevention",
      ],
      resources: "MHA Annual Report, IDSA, ORF, The Hindu Security section",
    },
    {
      id: 25,
      section: "Security",
      sectionColor: "sky",
      title: "Communication Networks, Media, Social Media, Cyber Security",
      priority: "CRITICAL",
      syllabus:
        "Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges, basics of cyber security.",
      breakdown: [
        "Fake news and misinformation",
        "Information warfare",
        "Encrypted platforms misuse",
        "Dark web activities",
        "Critical infrastructure cyber-attacks",
      ],
      whatUPSCAsks: [
        "Social media regulation vs free speech",
        "Cyber-attacks on infrastructure",
        "Data localization debate",
        "Encryption vs national security",
      ],
      resources: "MHA, CERT-In, NCRB Cyber Crime data, The Hindu",
    },
    {
      id: 26,
      section: "Security",
      sectionColor: "sky",
      title: "Money Laundering Prevention",
      priority: "MEDIUM",
      syllabus: "Money-laundering and its prevention.",
      breakdown: [
        "PMLA 2002 provisions",
        "FATF (Financial Action Task Force)",
        "Hawala networks",
        "Shell companies",
        "Benami Act",
        "Cryptocurrency challenges",
      ],
      whatUPSCAsks: [
        "Black money recovery",
        "Offshore accounts",
        "Cryptocurrency regulation",
        "ED's (Enforcement Directorate) role",
      ],
      resources: "PMLA 2002, FATF reports, MHA, The Hindu",
    },
    {
      id: 27,
      section: "Security",
      sectionColor: "sky",
      title: "Border Area Security - Organized Crime",
      priority: "HIGH",
      syllabus:
        "Security challenges and their management in border areas - linkages of organized crime with terrorism.",
      breakdown: [
        "Porous borders management",
        "Smuggling routes (drugs, arms, fake currency)",
        "Narco-terrorism linkage",
        "Human trafficking",
        "Coastal security challenges",
      ],
      whatUPSCAsks: [
        "Smart fencing technology",
        "Border area development",
        "Drug trafficking from Golden Triangle/Crescent",
        "Coastal security gaps",
      ],
      resources: "MHA, BSF, Coast Guard reports, The Hindu",
    },
    {
      id: 28,
      section: "Security",
      sectionColor: "sky",
      title: "Security Forces & Agencies",
      priority: "HIGH",
      syllabus: "Various Security forces and agencies and their mandate.",
      breakdown: [
        "CRPF (Central Reserve Police Force)",
        "BSF (Border Security Force)",
        "CISF (Central Industrial Security Force)",
        "ITBP (Indo-Tibetan Border Police)",
        "NSG (National Security Guard)",
        "Assam Rifles, Coast Guard",
        "NIA (National Investigation Agency), IB, RAW",
      ],
      whatUPSCAsks: [
        "Coordination between security agencies",
        "Single-command structure debate",
        "AFSPA controversy",
        "Police reforms (Prakash Singh case)",
      ],
      resources: "MHA website (force-wise mandates), The Hindu, IDSA",
    },
  ];

  return (
    <section
      id="topics"
      className="py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-teal-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
            Complete Topic Breakdown
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            28 Topics across 5 Sections - UPSC Syllabus, Strategic Breakdown &
            Resources
          </p>
        </motion.div>

        <div className="space-y-4 max-w-6xl mx-auto">
          {topics.map((topic, index) => {
            const isOpen = openTopic === topic.id;
            const SectionIcon =
              topic.sectionColor === "cyan"
                ? TrendingUp
                : topic.sectionColor === "sky"
                ? Cpu
                : topic.sectionColor === "teal"
                ? Leaf
                : Shield;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.03, 0.8),
                }}
              >
                <Collapsible.Root
                  open={isOpen}
                  onOpenChange={() => setOpenTopic(isOpen ? null : topic.id)}
                >
                  <div
                    className={`bg-white rounded-xl shadow-lg border-2 border-${topic.sectionColor}-100 hover:border-${topic.sectionColor}-300 transition-all overflow-hidden`}
                  >
                    <Collapsible.Trigger asChild>
                      <button className="w-full p-6 text-left hover:bg-cyan-50 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br from-${topic.sectionColor}-500 to-${topic.sectionColor}-700 rounded-lg flex items-center justify-center flex-shrink-0`}
                            >
                              <span className="text-white font-bold text-lg">
                                {topic.id}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <span
                                  className={`px-3 py-1 bg-${topic.sectionColor}-100 text-${topic.sectionColor}-800 rounded-full text-xs font-bold uppercase`}
                                >
                                  {topic.priority}
                                </span>
                                <span className="text-cyan-600 text-sm font-medium flex items-center gap-1">
                                  <SectionIcon className="w-4 h-4" />
                                  {topic.section}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-cyan-900 mb-2">
                                {topic.title}
                              </h3>
                              <p className="text-sm text-cyan-600 italic">
                                <strong>UPSC:</strong> {topic.syllabus}
                              </p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown
                              className={`w-6 h-6 text-${topic.sectionColor}-600`}
                            />
                          </motion.div>
                        </div>
                      </button>
                    </Collapsible.Trigger>

                    <Collapsible.Content>
                      <div className="px-6 pb-6 border-t border-cyan-100">
                        <div className="mt-6 mb-6">
                          <h4
                            className={`text-lg font-bold text-${topic.sectionColor}-900 mb-4 flex items-center gap-2`}
                          >
                            <BookOpen className="w-5 h-5" />
                            Topic Breakdown
                          </h4>
                          <div className="space-y-2">
                            {topic.breakdown.map((point, idx) => (
                              <div
                                key={idx}
                                className={`flex items-start gap-3 p-3 bg-${topic.sectionColor}-50 rounded-lg`}
                              >
                                <CheckCircle
                                  className={`w-5 h-5 text-${topic.sectionColor}-600 flex-shrink-0 mt-0.5`}
                                />
                                <p
                                  className={`text-${topic.sectionColor}-900 text-sm`}
                                >
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4
                            className={`text-lg font-bold text-${topic.sectionColor}-900 mb-4 flex items-center gap-2`}
                          >
                            <AlertTriangle className="w-5 h-5" />
                            What UPSC Loves to Ask
                          </h4>
                          <div className="space-y-2">
                            {topic.whatUPSCAsks.map((point, idx) => (
                              <div
                                key={idx}
                                className={`flex items-start gap-3 p-3 bg-gradient-to-r from-${topic.sectionColor}-100 to-${topic.sectionColor}-50 rounded-lg border-l-4 border-${topic.sectionColor}-600`}
                              >
                                <AlertTriangle
                                  className={`w-5 h-5 text-${topic.sectionColor}-600 flex-shrink-0 mt-0.5`}
                                />
                                <p
                                  className={`text-${topic.sectionColor}-900 text-sm font-medium`}
                                >
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`bg-gradient-to-r from-${topic.sectionColor}-600 to-${topic.sectionColor}-700 text-white p-4 rounded-lg`}
                        >
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Key Resources
                          </h4>
                          <p className="text-sm">{topic.resources}</p>
                        </div>
                      </div>
                    </Collapsible.Content>
                  </div>
                </Collapsible.Root>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

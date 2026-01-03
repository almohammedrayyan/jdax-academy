import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Scale,
  Heart,
  Globe,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

export default function GS2TopicSections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [openTopic, setOpenTopic] = useState(0);

  const topics = [
    // SECTION 1: CONSTITUTION & POLITY (Topics 1-9)
    {
      id: 1,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title:
        "Indian Constitution - Historical, Evolution, Features, Amendments, Basic Structure",
      priority: "CRITICAL",
      syllabus:
        "Indian Constitution—historical underpinnings, evolution, features, amendments, significant provisions and basic structure.",
      breakdown: [
        "Historical underpinnings (borrowed features, Constituent Assembly debates)",
        "Evolution (1950-present, major milestones)",
        "Features (federal, parliamentary, secular, etc.)",
        "Amendments (106 total - recent ones like EWS 103rd, Women's Reservation 106th, Article 370 abrogation)",
        "Significant provisions (Fundamental Rights, DPSP, Fundamental Duties)",
        "Basic Structure doctrine (Kesavananda Bharati 1973)",
      ],
      whatUPSCAsks: [
        "Basic Structure doctrine - ALMOST EVERY YEAR!",
        "Recent amendments (103rd EWS, 106th Women's Reservation, Article 370)",
        "FR-DPSP balance and conflicts",
        "Borrowed features and their sources",
        "Constituent Assembly debates on specific articles",
      ],
      resources:
        "M. Laxmikanth (Chapters 1-10), DD Basu, Constitution of India (Bare Act)",
    },
    {
      id: 2,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Federal Structure - Centre-State Relations, Devolution",
      priority: "CRITICAL",
      syllabus:
        "Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure, devolution of powers and finances up to local levels and challenges therein.",
      breakdown: [
        "Union-State functions (legislative, executive, financial)",
        "Federal challenges (Governor role controversies, Article 356 misuse, GST Council disputes)",
        "Devolution (73rd/74th Amendments - Panchayati Raj system)",
        "Finance Commission recommendations (15th FC)",
        "Inter-State Council, Zonal Councils",
        "Cooperative vs Competitive federalism",
      ],
      whatUPSCAsks: [
        "Cooperative federalism vs competitive federalism",
        "Devolution challenges (state autonomy, local governance)",
        "Recent Centre-State conflicts (Governor-CM, GST disputes, NEET issue)",
        "Finance Commission recommendations",
        "Article 356 - President's Rule controversies",
      ],
      resources:
        "M. Laxmikanth (Chapters 11-17), PRS India (Centre-State relations), Finance Commission Reports",
    },
    {
      id: 3,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Separation of Powers - Dispute Redressal",
      priority: "HIGH",
      syllabus:
        "Separation of powers between various organs dispute redressal mechanisms and institutions.",
      breakdown: [
        "Legislature-Executive-Judiciary checks and balances",
        "Dispute mechanisms (Inter-State Water Disputes Tribunal, Inter-State Council)",
        "Judicial review vs judicial activism vs judicial overreach",
        "Alternative Dispute Resolution (ADR) mechanisms",
        "Tribunal system and reforms",
      ],
      whatUPSCAsks: [
        "Judicial activism vs judicial overreach debate",
        "ADR mechanisms effectiveness",
        "Tribunal reforms (2021 Tribunal Reforms Act)",
        "Checks and balances between organs",
        "Recent SC-Executive conflicts",
      ],
      resources: "M. Laxmikanth, PRS India, SC judgments on indiankanoon.org",
    },
    {
      id: 4,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Comparative Constitutional Schemes",
      priority: "MEDIUM",
      syllabus:
        "Comparison of the Indian constitutional scheme with that of other countries.",
      breakdown: [
        "Parliamentary vs Presidential system (India vs USA)",
        "Federal systems (India vs USA vs Canada)",
        "Secularism (Indian vs Western/French)",
        "Amendment procedures (India vs USA)",
        "Emergency provisions comparison",
        "Why India chose parliamentary over presidential",
      ],
      whatUPSCAsks: [
        "Indian secularism vs Western secularism (REGULAR!)",
        "Why India adopted parliamentary system",
        "Federal structure comparisons",
        "Judicial review in different countries",
      ],
      resources: "M. Laxmikanth (Appendices), Comparative Politics books",
    },
    {
      id: 5,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Parliament & State Legislatures",
      priority: "CRITICAL",
      syllabus:
        "Parliament and State legislatures—structure, functioning, conduct of business, powers & privileges and issues arising out of these.",
      breakdown: [
        "Structure (Lok Sabha/Rajya Sabha, Vidhan Sabha/Parishad)",
        "Money Bill vs Financial Bill vs Ordinary Bill",
        "Committee system (PAC, Estimates Committee, DRSCs)",
        "Powers and privileges of MPs/MLAs",
        "Issues: Disruptions, declining productivity, anti-defection law (10th Schedule), ordinance raj, criminalization",
      ],
      whatUPSCAsks: [
        "Anti-defection law issues (VERY REGULAR!)",
        "Parliamentary committees effectiveness",
        "Declining productivity of Parliament",
        "Criminalization of politics (ADR reports)",
        "Money Bill controversy (Aadhaar Act 2016)",
      ],
      resources:
        "M. Laxmikanth (Chapters 18-23), PRS India (session reports, Vital Statistics), ADR reports",
    },
    {
      id: 6,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Executive & Judiciary Structure",
      priority: "CRITICAL",
      syllabus:
        "Structure, organization and functioning of the Executive and the Judiciary—Ministries and Departments of the Government.",
      breakdown: [
        "Executive: President/PM/Governor powers and roles",
        "Council of Ministers organization",
        "Ministries and Departments structure",
        "Judiciary: SC/HC structure, appointment process",
        "Collegium system vs NJAC debate",
        "Judicial pendency and reforms",
      ],
      whatUPSCAsks: [
        "Collegium system issues (VERY REGULAR!)",
        "Four Judges Press Conference 2018",
        "NJAC judgment and aftermath",
        "Governor controversies (partisan behavior, delayed assent)",
        "Judicial pendency solutions",
      ],
      resources:
        "M. Laxmikanth (Chapters 24-32), SC website, Four Judges Cases",
    },
    {
      id: 7,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Pressure Groups & Representation of People's Act",
      priority: "MEDIUM",
      syllabus:
        "Pressure groups and formal/informal associations and their role in the Polity. Salient features of the Representation of People's Act.",
      breakdown: [
        "Types of pressure groups (sectional, promotional)",
        "Role in democracy (lobbying, advocacy, awareness)",
        "Electoral reforms needs",
        "RPA provisions (qualifications, disqualifications, Model Code of Conduct)",
        "Electoral malpractices and remedies",
      ],
      whatUPSCAsks: [
        "Electoral reforms (state funding, criminalization)",
        "Pressure groups in democracy (positive and negative)",
        "Recent ECI guidelines (MCC, social media)",
        "Disqualification under RPA",
      ],
      resources:
        "M. Laxmikanth, RPA 1951 (Bare Act), ECI website, Law Commission reports on electoral reforms",
    },
    {
      id: 8,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Constitutional Bodies",
      priority: "HIGH",
      syllabus:
        "Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies.",
      breakdown: [
        "CAG (Comptroller and Auditor General)",
        "Election Commission",
        "UPSC (Union Public Service Commission)",
        "Finance Commission (15th FC recommendations)",
        "NHRC (National Human Rights Commission)",
        "CIC (Central Information Commission)",
        "CVC (Central Vigilance Commission)",
      ],
      whatUPSCAsks: [
        "Finance Commission recommendations (15th FC - vertical/horizontal devolution)",
        "Election Commission independence",
        "NHRC effectiveness and limitations",
        "CAG audit reports on government schemes",
      ],
      resources:
        "M. Laxmikanth, Official websites (cag.gov.in, eci.gov.in, upsc.gov.in, etc.)",
    },
    {
      id: 9,
      section: "Constitution & Polity",
      sectionColor: "purple",
      title: "Statutory/Regulatory/Quasi-Judicial Bodies",
      priority: "MEDIUM",
      syllabus: "Statutory, regulatory and various quasi-judicial bodies.",
      breakdown: [
        "SEBI (Securities and Exchange Board)",
        "CCI (Competition Commission of India)",
        "TRAI (Telecom Regulatory Authority)",
        "IRDAI (Insurance Regulatory Authority)",
        "RBI (Reserve Bank of India)",
        "Tribunals system (CAT, NGT, NCLT, etc.)",
      ],
      whatUPSCAsks: [
        "Tribunals reforms (2021 Tribunal Reforms Act)",
        "Regulatory capture issues",
        "RBI autonomy debate",
        "Quasi-judicial powers and accountability",
      ],
      resources:
        "M. Laxmikanth, Official websites of regulatory bodies, PRS India",
    },

    // SECTION 2: GOVERNANCE & SOCIAL JUSTICE (Topics 10-16)
    {
      id: 10,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Government Policies & Interventions",
      priority: "HIGH",
      syllabus:
        "Government policies and interventions for development in various sectors and issues arising out of their design and implementation.",
      breakdown: [
        "Policy-making process (formulation, implementation, evaluation)",
        "Sectoral interventions (agriculture, industry, social sector)",
        "Implementation challenges (last-mile delivery, bureaucratic delays)",
        "Evaluation mechanisms (outcome vs output)",
        "Policy design flaws and corrections",
      ],
      whatUPSCAsks: [
        "Policy design flaws (targeting errors, implementation gaps)",
        "Outcome vs output focus",
        "Recent policy interventions (NEP 2020, Agri reforms)",
        "Evaluation mechanisms effectiveness",
      ],
      resources:
        "NITI Aayog reports, Economic Survey (Policy chapters), Ministry websites",
    },
    {
      id: 11,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Development Industry - NGOs, SHGs",
      priority: "MEDIUM",
      syllabus:
        "Development processes and the development industry—the role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders.",
      breakdown: [
        "Role of NGOs in development",
        "SHGs (Self-Help Groups) - women's empowerment model",
        "CSOs (Civil Society Organizations) engagement",
        "PPP (Public-Private Partnership) models",
        "Donor coordination and FCRA (Foreign Contribution Regulation Act)",
      ],
      whatUPSCAsks: [
        "NGO accountability and FCRA regulations",
        "SHG effectiveness in women's empowerment",
        "PPP project failures and lessons",
        "Civil society role in governance",
      ],
      resources: "NITI Aayog, Ministry of Rural Development, FCRA portal",
    },
    {
      id: 12,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Welfare Schemes for Vulnerable Sections",
      priority: "CRITICAL",
      syllabus:
        "Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes; mechanisms, laws, institutions and Bodies constituted for the protection and betterment of these vulnerable sections.",
      breakdown: [
        "Target groups: SC/ST, OBC, Minorities, Women, Children, Elderly, Disabled",
        "Major schemes: MGNREGA, PMAY (Housing), Ayushman Bharat (Health), PM-KISAN, POSHAN (Nutrition), Beti Bachao Beti Padhao",
        "Mechanisms: DBT (Direct Benefit Transfer), Aadhaar-based delivery, grievance redressal",
        "Laws: SC/ST Prevention of Atrocities Act, RTE (Right to Education), POCSO, Rights of Persons with Disabilities Act",
        "Performance evaluation and gaps",
      ],
      whatUPSCAsks: [
        "Scheme effectiveness with data!",
        "DBT leakages and exclusion errors",
        "Convergence issues between schemes",
        "State-level variations in implementation",
      ],
      resources:
        "Ministry websites (rural.gov.in, socialjustice.gov.in, wcd.nic.in), Economic Survey, CAG reports, NITI Aayog",
    },
    {
      id: 13,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Social Sector - Health, Education, Human Resources",
      priority: "CRITICAL",
      syllabus:
        "Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources.",
      breakdown: [
        "Health: National Health Policy 2017, Ayushman Bharat (PMJAY + HWCs), primary healthcare gaps, doctor-population ratio",
        "Education: NEP 2020 implementation, RTE Act, higher education reforms, quality issues",
        "Human Resources: Skill India Mission, NSDC, demographic dividend utilization, employability gap",
      ],
      whatUPSCAsks: [
        "NEP 2020 implementation challenges (REGULAR!)",
        "Healthcare access inequity (urban-rural divide)",
        "Skill development vs employability gap",
        "RTE implementation issues",
      ],
      resources:
        "NEP 2020 (Full document), National Health Policy 2017, Ministry websites (education.gov.in, mohfw.gov.in, msde.gov.in)",
    },
    {
      id: 14,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Poverty & Hunger",
      priority: "HIGH",
      syllabus: "Issues relating to poverty and hunger.",
      breakdown: [
        "Poverty estimation debates (Tendulkar Committee, Rangarajan Committee, Multidimensional Poverty Index)",
        "Food security (NFSA 2013 - National Food Security Act)",
        "Malnutrition (stunting, wasting) - NFHS data",
        "PDS reforms (Targeted PDS, One Nation One Ration Card)",
        "ICDS (Integrated Child Development Services)",
      ],
      whatUPSCAsks: [
        "Poverty line controversies and MPI",
        "Hunger despite food surplus (PDS inefficiencies)",
        "ONOR Card success and challenges",
        "Malnutrition - causes and solutions",
      ],
      resources:
        "NITI Aayog (MPI reports), NFHS data, Economic Survey (Social sector), PDS/ICDS ministry websites",
    },
    {
      id: 15,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Governance - Transparency, Accountability, E-Governance",
      priority: "CRITICAL",
      syllabus:
        "Important aspects of governance, transparency and accountability, e-governance-applications, models, successes, limitations, and potential; citizens charters, transparency & accountability and institutional and other measures.",
      breakdown: [
        "Good governance principles (participation, rule of law, transparency, responsiveness, equity, effectiveness)",
        "RTI Act 2005: Implementation, exemptions (Section 8), effectiveness, dilution concerns",
        "E-governance: Digital India, Aadhaar, UPI, e-NAM (National Agriculture Market), GeM (Government e-Marketplace)",
        "Citizens Charters, Sevottam model",
        "Accountability mechanisms: Lokpal, Lokayukta, CAG, CVC, judicial review, media, civil society",
      ],
      whatUPSCAsks: [
        "RTI effectiveness and dilution attempts (VERY REGULAR!)",
        "E-governance success models and limitations",
        "Lokpal delays and effectiveness",
        "Accountability gaps in governance",
      ],
      resources:
        "RTI Act 2005 (Full text - MUST READ!), cic.gov.in, lokpal.gov.in, digitalindia.gov.in, 2nd ARC reports",
    },
    {
      id: 16,
      section: "Governance & Social Justice",
      sectionColor: "violet",
      title: "Role of Civil Services in Democracy",
      priority: "HIGH",
      syllabus: "Role of civil services in a democracy.",
      breakdown: [
        "Constitutional provisions (Article 311-312)",
        "All India Services (IAS, IPS, IFS)",
        "Neutrality and integrity in civil services",
        "Reforms: 2nd ARC recommendations, lateral entry debate, performance appraisal, training",
        "Politicization concerns and solutions",
      ],
      whatUPSCAsks: [
        "Civil service reforms needed",
        "Lateral entry pros and cons",
        "Politicization concerns",
        "Neutrality vs accountability debate",
      ],
      resources:
        "2nd ARC reports (Vol. on Civil Services), DOPT (Department of Personnel & Training), Articles on lateral entry",
    },

    // SECTION 3: INTERNATIONAL RELATIONS (Topics 17-20)
    {
      id: 17,
      section: "International Relations",
      sectionColor: "fuchsia",
      title: "India's Neighborhood Relations",
      priority: "CRITICAL",
      syllabus: "India and its Neighborhood-relations.",
      breakdown: [
        "Organizations: SAARC (challenges), BIMSTEC (alternatives)",
        "Bilateral: Pakistan (terrorism, water disputes), China (border LAC conflicts, trade deficit), Bangladesh (water sharing, connectivity, Rohingya), Nepal (constitution, Madhesi issue), Sri Lanka (Tamil issue, Chinese debt trap), Bhutan (hydropower cooperation), Myanmar (Rohingya, border insurgency), Maldives (India First vs China tilt)",
        "Policies: Neighborhood First, Act East Policy (ASEAN engagement)",
      ],
      whatUPSCAsks: [
        "India-China border issues (REGULAR! - Galwan, Doklam, Arunachal)",
        "Pakistan cross-border terrorism",
        "China's encirclement strategy in neighborhood",
        "Maldives First vs India First",
      ],
      resources:
        "MEA website (mea.gov.in - bilateral pages), The Hindu International section, ORF/IDSA analyses",
    },
    {
      id: 18,
      section: "International Relations",
      sectionColor: "fuchsia",
      title: "Bilateral, Regional, Global Groupings",
      priority: "CRITICAL",
      syllabus:
        "Bilateral, regional and global groupings and agreements involving India and/or affecting India's interests.",
      breakdown: [
        "Plurilateral: Quad (India-US-Japan-Australia - Indo-Pacific strategy), AUKUS (implications for India)",
        "Regional: ASEAN (Act East Policy), EU (FTA negotiations), African Union, Arab League",
        "Global: BRICS (expansion 2023 - Saudi, Iran, UAE, Egypt, Ethiopia entry), SCO (Shanghai Cooperation Organization - security), G20 (India's presidency 2023), G7 (India as invited guest)",
        "Agreements: RCEP (India opted out 2019), FTAs (bilateral trade agreements), IPEF (Indo-Pacific Economic Framework)",
      ],
      whatUPSCAsks: [
        "India's G20 presidency outcomes (2023)",
        "Quad significance in Indo-Pacific",
        "BRICS expansion implications",
        "India opting out of RCEP - pros/cons",
      ],
      resources: "MEA website, The Hindu, ORF (orfonline.org), IDSA (idsa.in)",
    },
    {
      id: 19,
      section: "International Relations",
      sectionColor: "fuchsia",
      title: "Effect of Developed/Developing Countries' Policies",
      priority: "HIGH",
      syllabus:
        "Effect of policies and politics of developed and developing countries on India's interests, Indian diaspora.",
      breakdown: [
        "US: China containment strategy (benefits India), sanctions on Russia/Iran (India's balancing act), technology transfer restrictions (H1B, chip technology)",
        "China: BRI (Belt and Road Initiative - debt trap, encirclement concern), trade surplus with India ($100B+), supply chain dominance (APIs, electronics)",
        "Russia: Ukraine war (India's strategic autonomy, discounted oil imports), defense partnership (S-400)",
        "EU: Carbon Border Adjustment Mechanism (CBAM - trade impact), FTA negotiations",
        "Indian Diaspora: Remittances ($100B+), soft power, advocacy (US, UK, Gulf)",
      ],
      whatUPSCAsks: [
        "India's strategic autonomy (Russia-Ukraine war)",
        "Supply chain resilience post-COVID",
        "Indian diaspora contributions",
        "US-China rivalry - opportunities for India",
      ],
      resources:
        "The Hindu, Indian Express, MEA website, ORF, Gateway House (gatewayhouse.in)",
    },
    {
      id: 20,
      section: "International Relations",
      sectionColor: "fuchsia",
      title: "International Institutions",
      priority: "HIGH",
      syllabus:
        "Important International institutions, agencies and fora-their structure, mandate.",
      breakdown: [
        "UN: UNSC (permanent seat demand, reform), UNGA (voting patterns), specialized agencies (WHO, UNESCO, UNICEF, UNHCR, UNDP)",
        "Economic: WTO (dispute settlement, farm subsidies disputes), IMF (quotas, SDRs), World Bank (lending, reforms)",
        "Legal: ICC (International Criminal Court - jurisdiction issues), ICJ (International Court of Justice - India's cases)",
        "Others: FATF (grey/black list concerns), Interpol, IAEA (nuclear cooperation - NSG waiver)",
      ],
      whatUPSCAsks: [
        "UNSC reforms (India's case for permanent seat)",
        "WTO effectiveness decline",
        "WHO pandemic response",
        "Climate finance (COP outcomes - loss and damage fund)",
      ],
      resources:
        "Official websites (un.org, who.int, wto.org, worldbank.org, imf.org), MEA website, The Hindu",
    },
  ];

  return (
    <section
      id="topics"
      className="py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-purple-900 mb-4">
            Complete Topic Breakdown
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            20 Topics across 3 Sections - UPSC Syllabus, Strategic Breakdown &
            Resources
          </p>
        </motion.div>

        <div className="space-y-4 max-w-6xl mx-auto">
          {topics.map((topic, index) => {
            const isOpen = openTopic === topic.id;
            const SectionIcon =
              topic.sectionColor === "purple"
                ? Scale
                : topic.sectionColor === "violet"
                ? Heart
                : Globe;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.8),
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
                      <button className="w-full p-6 text-left hover:bg-purple-50 transition-colors">
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
                                <span className="text-purple-600 text-sm font-medium flex items-center gap-1">
                                  <SectionIcon className="w-4 h-4" />
                                  {topic.section}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-purple-900 mb-2">
                                {topic.title}
                              </h3>
                              <p className="text-sm text-purple-600 italic">
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
                      <div className="px-6 pb-6 border-t border-purple-100">
                        {/* Topic Breakdown */}
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

                        {/* What UPSC Loves to Ask */}
                        <div className="mb-6">
                          <h4
                            className={`text-lg font-bold text-${topic.sectionColor}-900 mb-4 flex items-center gap-2`}
                          >
                            <TrendingUp className="w-5 h-5" />
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

                        {/* Resources */}
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

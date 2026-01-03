import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Scale,
  Heart,
  Users,
  BookOpen,
  Brain,
  Shield,
  Lightbulb,
  Globe,
  Building2,
  Eye,
  FileCheck,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import React from "react";

export default function GS4TopicSections() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [expandedTopic, setExpandedTopic] = useState(0);

  const topics = [
    // META ETHICS & FOUNDATIONAL CONCEPTS (Topics 1-8)
    {
      id: 1,
      section: "Meta Ethics",
      title: "Ethics & Human Interface",
      subtitle: "Essence, Determinants, Consequences",
      icon: Scale,
      priority: "HIGH",
      color: "rose",
      breakdown: [
        "Essence: What is ethics? Morality vs ethics, ethical vs legal",
        "Determinants: Family, society, religion, culture, law",
        "Consequences: Impact on individual and society",
      ],
      upscAsks: [
        "Real-life examples from current affairs",
        "Ethical dilemmas from news (whistleblowing, civil disobedience)",
        "Distinction between ethics, morality, law",
      ],
      resources: [
        "Lexicon Ethics book (Chapter 1)",
        "Current affairs - The Hindu ethical debates",
      ],
    },
    {
      id: 2,
      section: "Meta Ethics",
      title: "Dimensions of Ethics",
      subtitle: "Individual, Social, Professional",
      icon: Brain,
      priority: "MEDIUM",
      color: "rose",
      breakdown: [
        "Individual ethics, social ethics, professional ethics",
        "Normative (what should be), descriptive (what is), meta-ethics (why ethics exists)",
        "Conflicts between dimensions",
      ],
      upscAsks: [
        "Applying dimensions to case studies",
        "Conflict: professional duty vs personal morality",
        "Examples from administration",
      ],
      resources: ["Lexicon Ethics (Chapter 2)", "NCERT Class 11 Psychology"],
    },
    {
      id: 3,
      section: "Meta Ethics",
      title: "Ethics in Private & Public Relationships",
      subtitle: "Conflict of Interest, Nepotism",
      icon: Users,
      priority: "HIGH",
      color: "rose",
      breakdown: [
        "Private: Family, friends (duty, loyalty, honesty)",
        "Public: Official duties (accountability, transparency, impartiality)",
        "Conflict: Private loyalties vs public duty",
      ],
      upscAsks: [
        "Case studies on conflict of interest",
        "Nepotism in administration",
        "Favoritism - family business vs official duty",
      ],
      resources: [
        "Lexicon Ethics (Chapter 3)",
        "2nd ARC Report on Ethics in Governance",
      ],
    },
    {
      id: 4,
      section: "Meta Ethics",
      title: "Human Values",
      subtitle: "Great Leaders & Role of Institutions",
      icon: Heart,
      priority: "HIGH",
      color: "pink",
      breakdown: [
        "Leaders: Gandhi (truth, non-violence), Ambedkar (equality), Vivekananda (service)",
        "Mother Teresa (compassion), Lincoln, Mandela",
        "Institutions: Family (primary socialization), society (norms), education (value education)",
      ],
      upscAsks: [
        "Quote-based questions",
        "Lessons from leaders' lives applied to governance",
        "How institutions inculcate values",
      ],
      resources: [
        "Gandhi: My Experiments with Truth (selected chapters)",
        "Quotes compilation from great leaders",
        "Mandela: Long Walk to Freedom",
      ],
    },
    {
      id: 5,
      section: "Meta Ethics",
      title: "Attitude",
      subtitle: "Content, Structure, Function",
      icon: TrendingUp,
      priority: "MEDIUM",
      color: "pink",
      breakdown: [
        "Content: Cognitive (beliefs), affective (feelings), behavioral (actions)",
        "Function: Shapes behavior, influences decisions",
        "Moral attitudes, political attitudes",
        "Social influence: Persuasion, peer pressure, conformity",
      ],
      upscAsks: [
        "How attitude affects decision-making in administration",
        "Changing attitudes - persuasion techniques",
        "Moral vs political attitudes in governance",
      ],
      resources: [
        "NCERT Class 11 Psychology (Attitude chapter)",
        "Lexicon Ethics (Attitude section)",
      ],
    },
    {
      id: 6,
      section: "Meta Ethics",
      title: "Aptitude & Foundational Values",
      subtitle: "Civil Service Values",
      icon: Shield,
      priority: "CRITICAL",
      color: "red",
      breakdown: [
        "Integrity, impartiality, non-partisanship",
        "Objectivity, dedication to public service",
        "Empathy, tolerance, compassion towards weaker sections",
      ],
      upscAsks: [
        "Case studies testing these values in conflict situations",
        "Balancing competing values (efficiency vs compassion)",
        "Real-life examples from civil servants",
      ],
      resources: [
        "All India Services Conduct Rules",
        "Constitutional oath",
        "CVC website - integrity cases",
      ],
    },
    {
      id: 7,
      section: "Meta Ethics",
      title: "Emotional Intelligence",
      subtitle: "Concepts, Utilities, Applications",
      icon: Lightbulb,
      priority: "CRITICAL",
      color: "red",
      breakdown: [
        "Components: Self-awareness, self-regulation, motivation, empathy, social skills",
        "In administration: Handling pressure, team management, conflict resolution",
        "Utilities: Better decision-making, stress management, leadership",
      ],
      upscAsks: [
        "EI in leadership scenarios",
        "Crisis management with EI",
        "Dealing with difficult subordinates/citizens using EI",
      ],
      resources: [
        "Daniel Goleman - Emotional Intelligence (reference only)",
        "Articles on EI in public administration",
        "Case studies from coaching institutes",
      ],
    },
    {
      id: 8,
      section: "Meta Ethics",
      title: "Moral Thinkers & Philosophers",
      subtitle: "India & World",
      icon: BookOpen,
      priority: "MEDIUM",
      color: "rose",
      breakdown: [
        "Indian: Gandhi, Vivekananda, Kautilya, Buddha, Mahavira, Guru Nanak",
        "Western: Aristotle (virtue ethics), Kant (duty ethics), Bentham/Mill (utilitarianism)",
        "Rawls (justice as fairness)",
      ],
      upscAsks: [
        "Applying their philosophies to modern governance",
        "Comparing different ethical approaches",
        "Quote-based questions with application",
      ],
      resources: [
        "Lexicon Ethics (Thinkers chapter)",
        "Summary notes from coaching institutes",
        "Selected readings from Gandhi, Vivekananda",
      ],
    },

    // APPLIED ETHICS IN PUBLIC ADMINISTRATION (Topics 9-13)
    {
      id: 9,
      section: "Applied Ethics",
      title: "Public Service Values & Ethics",
      subtitle: "5 Sub-topics",
      icon: Building2,
      priority: "CRITICAL",
      color: "red",
      breakdown: [
        "(i) Status & problems: Declining standards, corruption, abuse of power",
        "(ii) Ethical concerns: Conflict of interest, whistleblowing, gift acceptance",
        "(iii) Sources of guidance: Laws, rules, conscience - when they clash",
        "(iv) Accountability: CAG, CVC, Lokpal, RTI, judicial review",
        "(v) Strengthening ethics: Training, vigilance, e-governance",
      ],
      upscAsks: [
        "Recent scams - ethical failures",
        "Whistleblower protection",
        "When to follow law vs conscience",
        "Effectiveness of accountability mechanisms",
      ],
      resources: [
        "CVC website - Annual Reports ⭐⭐⭐",
        "Lokpal website",
        "2nd ARC Report - Ethics in Governance",
        "Recent corruption cases from The Hindu",
      ],
    },
    {
      id: 10,
      section: "Applied Ethics",
      title: "Ethical Issues in International Relations",
      subtitle: "Funding, Humanitarian Intervention",
      icon: Globe,
      priority: "LOW",
      color: "rose",
      breakdown: [
        "IR ethics: Humanitarian intervention, war ethics, refugee crisis",
        "Climate justice - developed vs developing nations",
        "Funding ethics: Conditional aid, tied loans, FCRA",
      ],
      upscAsks: [
        "China's BRI - debt trap ethics",
        "Vaccine diplomacy during COVID",
        "Climate finance - who pays?",
      ],
      resources: [
        "MEA website - India's foreign policy statements",
        "The Hindu - international relations editorials",
        "Climate change negotiations coverage",
      ],
    },
    {
      id: 11,
      section: "Applied Ethics",
      title: "Corporate Governance",
      subtitle: "CSR, ESG, Accountability",
      icon: Building2,
      priority: "MEDIUM",
      color: "pink",
      breakdown: [
        "Board accountability, shareholder vs stakeholder model",
        "CSR - Companies Act 2013 (Section 135)",
        "Insider trading, creative accounting",
        "ESG (Environmental, Social, Governance) investing",
      ],
      upscAsks: [
        "Corporate scams - Satyam, Kingfisher",
        "CSR effectiveness - genuine or PR?",
        "Greenwashing",
      ],
      resources: [
        "Companies Act 2013 - CSR provisions",
        "SEBI corporate governance norms",
        "Ministry of Corporate Affairs website",
        "Recent corporate scandals - The Hindu",
      ],
    },
    {
      id: 12,
      section: "Applied Ethics",
      title: "Probity in Governance",
      subtitle: "11 Sub-topics",
      icon: FileCheck,
      priority: "CRITICAL",
      color: "red",
      breakdown: [
        "(i) Concept of public service: Service above self",
        "(ii) Philosophical basis: Social contract, trusteeship",
        "(iii) Information sharing & transparency",
        "(iv) RTI Act 2005: Implementation, challenges",
        "(v) Codes of Ethics: Conduct Rules",
        "(vi) Codes of Conduct: Model Code (elections)",
        "(vii) Citizen's Charters: Service standards",
        "(viii) Work culture: File vs result orientation",
        "(ix) Quality of service delivery: Sevottam",
        "(x) Utilization of public funds: CAG audits",
        "(xi) Challenges of corruption: Types, causes, solutions",
      ],
      upscAsks: [
        "RTI effectiveness - exemptions misuse",
        "Lokpal effectiveness",
        "Whistleblower protection",
        "E-governance for transparency",
        "Corruption cases - systemic vs individual",
      ],
      resources: [
        "RTI Act 2005 (full text - must read!)",
        "CVC website - integrity pact, guidelines ⭐⭐⭐",
        "CAG Reports - audit failures",
        "DARPG - Citizen's Charter guidelines",
        "Lokpal website - cases, orders",
      ],
    },
    {
      id: 13,
      section: "Applied Ethics",
      title: "Case Studies",
      subtitle: "Real-life Ethical Dilemmas",
      icon: AlertTriangle,
      priority: "CRITICAL",
      color: "red",
      breakdown: [
        "Types: Ethical dilemmas, conflict situations, decisions under pressure",
        "Testing: Integrity, impartiality, problem-solving, empathy",
        "Stakeholders: Multiple parties (superior, subordinate, public, family, law)",
        "No clear answer: Test approach, reasoning, consequences",
      ],
      upscAsks: [
        "Recent real-life incidents converted to case studies",
        "Conflict of interest scenarios",
        "Whistleblowing dilemmas",
        "Resource allocation under constraints",
        "Disaster/crisis quick decisions",
      ],
      resources: [
        "Lexicon Case Study Compendium ⭐⭐⭐",
        "The Hindu, Indian Express - ethical controversies",
        "Practice 100+ case studies",
        "Civil servant controversies from news",
      ],
    },
  ];

  return (
    <section id="topics" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Topic Breakdown
          </h2>
          <p className="text-xl text-gray-600">
            13 topics across Meta Ethics (1-8) and Applied Ethics (9-13)
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`bg-gradient-to-r from-${topic.color}-50 to-white border-2 border-${topic.color}-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all`}
            >
              {/* Topic Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() =>
                  setExpandedTopic(expandedTopic === topic.id ? null : topic.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 bg-${topic.color}-100 rounded-xl`}>
                      <topic.icon
                        className={`w-6 h-6 text-${topic.color}-600`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {topic.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-xs font-bold rounded-full ${
                            topic.priority === "CRITICAL"
                              ? "bg-red-100 text-red-700"
                              : topic.priority === "HIGH"
                              ? "bg-orange-100 text-orange-700"
                              : topic.priority === "MEDIUM"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {topic.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {topic.subtitle}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 bg-${topic.color}-100 text-${topic.color}-700 text-xs font-semibold rounded-full`}
                        >
                          {topic.section}
                        </span>
                        <span className="text-gray-500 text-sm">
                          Topic {topic.id}
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedTopic === topic.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedTopic === topic.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t-2 border-rose-100 bg-gradient-to-br from-rose-50/50 to-white p-6 space-y-6"
                >
                  {/* Breakdown */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-rose-600" />
                      JDAX Breakdown
                    </h4>
                    <ul className="space-y-2">
                      {topic.breakdown.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What UPSC Asks */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-rose-600" />
                      What UPSC Asks
                    </h4>
                    <ul className="space-y-2">
                      {topic.upscAsks.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-rose-600" />
                      Resources
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.resources.map((resource, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-rose-100 text-rose-700 text-sm font-medium rounded-lg"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

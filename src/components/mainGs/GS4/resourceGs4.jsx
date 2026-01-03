import { motion } from "framer-motion";
import { BookOpen, Globe, FileText, Star, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function GS4Resources() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sections = [
    {
      title: "Theory (Topics 1-8)",
      color: "rose",
      icon: BookOpen,
      resources: [
        {
          name: "Ethics, Integrity & Aptitude by Lexicon",
          type: "Book",
          priority: "MUST",
          stars: 3,
          note: "Most comprehensive - theory + case studies",
        },
        {
          name: "NCERT Class 11 Psychology",
          type: "NCERT",
          priority: "HIGH",
          stars: 2,
          note: "Attitude, Emotions chapter",
        },
        {
          name: "Autobiographies",
          type: "Book",
          priority: "MEDIUM",
          stars: 2,
          note: "Gandhi (My Experiments), Mandela (Long Walk) - selected chapters",
        },
        {
          name: "Emotional Intelligence by Daniel Goleman",
          type: "Reference",
          priority: "LOW",
          stars: 1,
          note: "Reference only, not full reading",
        },
      ],
    },
    {
      title: "Applied Ethics (Topics 9-13)",
      color: "red",
      icon: Globe,
      resources: [
        {
          name: "CVC Website",
          type: "Government",
          priority: "MUST",
          stars: 3,
          note: "cvc.gov.in - Annual Reports, integrity pact, case studies",
        },
        {
          name: "RTI Act 2005",
          type: "Act",
          priority: "MUST",
          stars: 3,
          note: "Full text - short Act, must read!",
        },
        {
          name: "Lokpal Website",
          type: "Government",
          priority: "HIGH",
          stars: 2,
          note: "lokpal.gov.in - Cases, orders, effectiveness",
        },
        {
          name: "DARPG",
          type: "Government",
          priority: "HIGH",
          stars: 2,
          note: "darpg.gov.in - Citizen's Charter, Sevottam, Good Governance Index",
        },
        {
          name: "CAG Reports",
          type: "Government",
          priority: "MEDIUM",
          stars: 2,
          note: "cag.gov.in - Audit failures as ethical issues",
        },
        {
          name: "2nd ARC Reports",
          type: "Report",
          priority: "HIGH",
          stars: 2,
          note: "Ethics in Governance volume",
        },
        {
          name: "Companies Act 2013",
          type: "Act",
          priority: "MEDIUM",
          stars: 2,
          note: "Section 135 - CSR provisions",
        },
        {
          name: "All India Services Conduct Rules",
          type: "Rules",
          priority: "HIGH",
          stars: 2,
          note: "1968 - Key provisions",
        },
      ],
    },
    {
      title: "Case Studies",
      color: "pink",
      icon: FileText,
      resources: [
        {
          name: "Lexicon Case Study Compendium",
          type: "Book",
          priority: "MUST",
          stars: 3,
          note: "Practice book - 100+ case studies",
        },
        {
          name: "The Hindu & Indian Express",
          type: "Newspaper",
          priority: "MUST",
          stars: 3,
          note: "Ethical controversies, corruption cases, civil servant controversies",
        },
        {
          name: "CVC Annual Reports",
          type: "Report",
          priority: "HIGH",
          stars: 2,
          note: "Real corruption cases converted to learning",
        },
        {
          name: "Coaching Institute Notes",
          type: "Notes",
          priority: "MEDIUM",
          stars: 2,
          note: "Solved case studies with approach",
        },
      ],
    },
  ];

  return (
    <section id="resources" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Resources
          </h2>
          <p className="text-xl text-gray-600">
            Section-wise recommended materials for comprehensive preparation
          </p>
        </motion.div>

        {/* Resource Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: sectionIndex * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-br from-${section.color}-50 to-white border-2 border-${section.color}-200 rounded-2xl overflow-hidden`}
            >
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r from-${section.color}-500 to-${section.color}-600 p-6`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="w-7 h-7 text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="p-6 space-y-4">
                {section.resources.map((resource, index) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: sectionIndex * 0.2 + index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-gray-900">
                            {resource.name}
                          </h4>
                          <span
                            className={`px-2 py-1 text-xs font-bold rounded-full ${
                              resource.priority === "MUST"
                                ? "bg-red-100 text-red-700"
                                : resource.priority === "HIGH"
                                ? "bg-orange-100 text-orange-700"
                                : resource.priority === "MEDIUM"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {resource.priority}
                          </span>
                          <span
                            className={`px-2 py-1 bg-${section.color}-100 text-${section.color}-700 text-xs font-semibold rounded-full`}
                          >
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{resource.note}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: resource.stars }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 fill-${section.color}-500 text-${section.color}-500`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Priority Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Resource Strategy
              </h3>
              <ul className="space-y-2 text-rose-100">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>
                    <strong>MUST resources:</strong> Non-negotiable - core
                    preparation material
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>
                    <strong>HIGH resources:</strong> Important for comprehensive
                    coverage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>
                    <strong>The Hindu daily:</strong> Essential for recent
                    ethical controversies (last 3-5 years)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">•</span>
                  <span>
                    <strong>Practice 100+ case studies:</strong> Theory alone
                    won't help - application is key!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

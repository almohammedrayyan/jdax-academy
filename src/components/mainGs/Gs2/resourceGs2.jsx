import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  Globe,
  FileText,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import React from "react";

export default function GS2Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "Constitution & Polity",
      color: "purple",
      icon: BookOpen,
      resources: [
        {
          category: "NCERT ⭐⭐⭐",
          items: [
            "Class 11: Indian Constitution at Work ⭐⭐⭐",
            "Class 11: Political Theory",
            "Class 12: Politics in India Since Independence",
          ],
          priority: "MUST",
        },
        {
          category: "Standard Books ⭐⭐⭐",
          items: [
            "M. Laxmikanth - Indian Polity ⭐⭐⭐⭐ (THE BIBLE - Cover-to-cover MUST!)",
            "DD Basu - Constitution of India (for depth)",
          ],
          priority: "MUST",
        },
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "Constitution of India (Bare Act) → indiacode.nic.in",
            "PRS Legislative Research → prsindia.org ⭐⭐⭐",
            "Parliament website → sansad.in",
            "Supreme Court → sci.gov.in (judgments)",
            "ADR (Association for Democratic Reforms) → adrindia.org",
          ],
          priority: "HIGH",
        },
      ],
    },
    {
      title: "Governance & Social Justice",
      color: "violet",
      icon: FileText,
      resources: [
        {
          category: "Government Reports ⭐⭐⭐",
          items: [
            "Economic Survey (Annual - Social Sector chapters) ⭐⭐⭐⭐",
            "NITI Aayog → niti.gov.in (SDG India Index, Strategy papers)",
            "2nd ARC Reports (Governance volumes)",
          ],
          priority: "MUST",
        },
        {
          category: "Ministry Websites (CRITICAL for schemes!)",
          items: [
            "Rural Development → rural.gov.in (MGNREGA)",
            "Health & Family Welfare → mohfw.gov.in (Ayushman Bharat)",
            "Education → education.gov.in (NEP 2020, RTE)",
            "Social Justice → socialjustice.gov.in",
            "Women & Child Development → wcd.nic.in",
            "Housing & Urban Affairs → mohua.gov.in",
          ],
          priority: "HIGH",
        },
        {
          category: "Key Reports",
          items: [
            "RTI Act 2005 (Full text - MUST READ!)",
            "Central Information Commission → cic.gov.in",
            "Lokpal → lokpal.gov.in",
            "Digital India → digitalindia.gov.in",
            "CAG → cag.gov.in (Audit reports)",
          ],
          priority: "HIGH",
        },
      ],
    },
    {
      title: "International Relations",
      color: "fuchsia",
      icon: Globe,
      resources: [
        {
          category: "NCERT",
          items: ["Class 12: Contemporary World Politics"],
          priority: "MUST",
        },
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "Ministry of External Affairs → mea.gov.in ⭐⭐⭐⭐",
            "Annual Reports, Bilateral pages, Joint statements",
            "India at multilateral forums",
          ],
          priority: "MUST",
        },
        {
          category: "Think Tanks & Analysis ⭐⭐⭐",
          items: [
            "Observer Research Foundation (ORF) → orfonline.org ⭐⭐⭐",
            "IDSA (Institute for Defence Studies) → idsa.in ⭐⭐⭐",
            "Gateway House → gatewayhouse.in",
            "Vivekananda International Foundation (VIF)",
          ],
          priority: "HIGH",
        },
        {
          category: "Newspapers (CRITICAL!) ⭐⭐⭐",
          items: [
            "The Hindu - International section (DAILY MUST!)",
            "Indian Express - World/Explained sections",
            "Columnists: C. Raja Mohan, Harsh V. Pant, Shyam Saran",
          ],
          priority: "MUST",
        },
      ],
    },
  ];

  return (
    <section
      id="resources"
      className="py-20 bg-gradient-to-br from-purple-50 to-violet-50"
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
            Core Resources
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Section-wise curated resources for comprehensive preparation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: sectionIndex * 0.15 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100"
              >
                <div
                  className={`bg-gradient-to-r from-${section.color}-500 to-${section.color}-700 text-white p-6`}
                >
                  <Icon className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>

                <div className="p-6 space-y-6">
                  {section.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resourceIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.3 + sectionIndex * 0.15 + resourceIndex * 0.1,
                      }}
                      className={`bg-${section.color}-50 rounded-lg p-4 border-l-4 border-${section.color}-600`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-bold text-${section.color}-900`}>
                          {resource.category}
                        </h4>
                        <span
                          className={`px-2 py-1 bg-${section.color}-200 text-${section.color}-800 rounded text-xs font-bold`}
                        >
                          {resource.priority}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {resource.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`text-sm text-${section.color}-800 flex items-start gap-2`}
                          >
                            <ExternalLink
                              className={`w-4 h-4 text-${section.color}-600 flex-shrink-0 mt-0.5`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Resource Strategy Pro Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">✓ For Polity (48%):</h4>
                  <p className="text-sm">
                    M. Laxmikanth (3 readings) + PRS India + ADR + Recent SC
                    judgments
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">✓ For Governance (36%):</h4>
                  <p className="text-sm">
                    Economic Survey + Ministry websites + NITI Aayog + CAG
                    reports
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">✓ For IR (18%):</h4>
                  <p className="text-sm">
                    The Hindu International + MEA website + ORF/IDSA analyses
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    ✓ Case Laws (NON-NEGOTIABLE!):
                  </h4>
                  <p className="text-sm">
                    Kesavananda Bharati, SR Bommai, NJAC, Minerva Mills - MUST
                    KNOW!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

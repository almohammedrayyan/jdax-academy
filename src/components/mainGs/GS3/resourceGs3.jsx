import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Cpu,
  Leaf,
  Shield,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import React from "react";

export default function GS3Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "Economic Development",
      color: "cyan",
      icon: TrendingUp,
      resources: [
        {
          category: "NCERT ⭐⭐⭐",
          items: [
            "Class 9-10: Economics (Foundation)",
            "Class 11: Indian Economic Development ⭐⭐⭐",
            "Class 12: Introductory Macroeconomics",
          ],
          priority: "MUST",
        },
        {
          category: "Standard Books ⭐⭐⭐",
          items: [
            "Indian Economy by Ramesh Singh ⭐⭐⭐⭐ (THE BIBLE)",
            "Sriram IAS Economy Notes (concise)",
          ],
          priority: "MUST",
        },
        {
          category: "Government Reports ⭐⭐⭐⭐",
          items: [
            "Economic Survey (Annual) - CRITICAL! Read Vol 1",
            "Union Budget → finmin.gov.in",
            "NITI Aayog Reports → niti.gov.in",
            "RBI Annual Report → rbi.org.in",
            "Ministry of Agriculture → agricoop.gov.in",
          ],
          priority: "MUST",
        },
      ],
    },
    {
      title: "Science & Technology",
      color: "sky",
      icon: Cpu,
      resources: [
        {
          category: "NCERT",
          items: [
            "Class 8-10: Science (Foundation)",
            "Class 11-12: Biology (Biotechnology), Physics",
          ],
          priority: "MUST",
        },
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "ISRO → isro.gov.in ⭐⭐⭐",
            "DST → dst.gov.in",
            "DRDO → drdo.gov.in",
            "DBT → dbtindia.gov.in",
          ],
          priority: "HIGH",
        },
        {
          category: "Newspapers (DAILY!) ⭐⭐⭐",
          items: [
            "The Hindu Science & Technology section",
            "Indian Express Explained section",
            "Down to Earth magazine",
          ],
          priority: "MUST",
        },
      ],
    },
    {
      title: "Environment",
      color: "teal",
      icon: Leaf,
      resources: [
        {
          category: "NCERT ⭐⭐⭐",
          items: [
            "Class 11: Biology (Biodiversity, Environmental Issues)",
            "Class 12: Biology (Conservation)",
          ],
          priority: "MUST",
        },
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "MoEFCC → moef.gov.in ⭐⭐⭐",
            "Forest Survey of India → fsi.gov.in",
            "CPCB → cpcb.nic.in (Pollution data)",
          ],
          priority: "MUST",
        },
        {
          category: "International Reports ⭐⭐⭐",
          items: [
            "IPCC Reports (Summary for Policymakers)",
            "UNEP Emissions Gap Report",
            "Global Climate Risk Index",
          ],
          priority: "HIGH",
        },
      ],
    },
    {
      title: "Disaster Management",
      color: "cyan",
      icon: AlertTriangle,
      resources: [
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "NDMA → ndma.gov.in ⭐⭐⭐",
            "NDRF → ndrf.gov.in",
            "IMD → imd.gov.in",
          ],
          priority: "MUST",
        },
        {
          category: "Frameworks",
          items: ["Sendai Framework 2015-2030", "DM Act 2005"],
          priority: "HIGH",
        },
      ],
    },
    {
      title: "Security",
      color: "sky",
      icon: Shield,
      resources: [
        {
          category: "Government Sources ⭐⭐⭐",
          items: [
            "MHA → mha.gov.in ⭐⭐⭐ (Annual Reports)",
            "NIA → nia.gov.in",
            "NCRB → ncrb.gov.in (Crime stats)",
          ],
          priority: "MUST",
        },
        {
          category: "Think Tanks ⭐⭐⭐",
          items: ["IDSA → idsa.in ⭐⭐⭐", "ORF → orfonline.org", "VIF, CLAWS"],
          priority: "HIGH",
        },
        {
          category: "Newspapers (CRITICAL!)",
          items: ["The Hindu Security section (DAILY)", "Indian Express"],
          priority: "MUST",
        },
      ],
    },
  ];

  return (
    <section
      id="resources"
      className="py-20 bg-gradient-to-br from-cyan-50 to-sky-50"
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
            Core Resources
          </h2>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
            Section-wise curated resources for comprehensive preparation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-100"
              >
                <div
                  className={`bg-gradient-to-r from-${section.color}-500 to-${section.color}-700 text-white p-4`}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <h3 className="text-lg font-bold">{section.title}</h3>
                </div>

                <div className="p-4 space-y-4">
                  {section.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resourceIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.3 + sectionIndex * 0.1 + resourceIndex * 0.1,
                      }}
                      className={`bg-${section.color}-50 rounded-lg p-3 border-l-4 border-${section.color}-600`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4
                          className={`font-bold text-${section.color}-900 text-sm`}
                        >
                          {resource.category}
                        </h4>
                        <span
                          className={`px-2 py-0.5 bg-${section.color}-200 text-${section.color}-800 rounded text-xs font-bold`}
                        >
                          {resource.priority}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {resource.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`text-xs text-${section.color}-800 flex items-start gap-2`}
                          >
                            <ExternalLink
                              className={`w-3 h-3 text-${section.color}-600 flex-shrink-0 mt-0.5`}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-10 h-10 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Resource Strategy Pro Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">✓ Economic Survey = BIBLE</h4>
                  <p className="text-sm">
                    Read Vol 1 completely (Agriculture, Industry, Infrastructure
                    chapters)
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    ✓ Current Affairs = 70% GS3
                  </h4>
                  <p className="text-sm">
                    The Hindu daily (Econ+S&T+Env+Security sections)
                    NON-NEGOTIABLE!
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">✓ Data = Game Changer</h4>
                  <p className="text-sm">
                    GDP growth, crop production, pollution levels - MUST in
                    answers
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">✓ Government Reports</h4>
                  <p className="text-sm">
                    NITI Aayog, ISRO, MoEFCC, MHA annual reports - goldmines!
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

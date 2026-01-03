import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  Calendar,
  Home,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MainsPYQTemplate({
  paperNumber,
  paperTitle,
  paperSubtitle,
  colorScheme,
  urlPrefix,
}) {
  const [expandedYear, setExpandedYear] = useState(2025);
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  const getDownloadLink = (year) => {
    return `https://drive.google.com/file/d/${urlPrefix}_${year}/view`;
  };

  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-${colorScheme.light}-50 via-${colorScheme.accent}-50 to-white`}
    >
      {/* Header */}
      <section
        className={`bg-gradient-to-r from-${colorScheme.from}-600 to-${colorScheme.to}-600 py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/pyq"
              className={`flex items-center gap-2 text-${colorScheme.accent}-100 hover:text-white transition-colors`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to PYQ Hub</span>
            </Link>
            <Link
              to="/"
              className={`flex items-center gap-2 text-${colorScheme.accent}-100 hover:text-white transition-colors ml-auto`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-${colorScheme.accent}-500/20 backdrop-blur-sm border border-${colorScheme.accent}-300/30 rounded-full mb-6`}
              >
                <FileText
                  className={`w-5 h-5 text-${colorScheme.accent}-200`}
                />
                <span className={`text-${colorScheme.accent}-100`}>
                  Mains {paperNumber} PYQ Papers
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {paperTitle}
                <span className={`block mt-2 text-${colorScheme.accent}-200`}>
                  {paperSubtitle}
                </span>
              </h1>
              <p
                className={`text-xl text-${colorScheme.accent}-100 max-w-2xl mx-auto`}
              >
                Download previous year Mains {paperNumber} papers from 2013 to
                2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Year-wise Question Papers
            </h2>
            <p className="text-gray-600">
              Click on any year to expand and download the paper
            </p>
          </div>

          {/* Year Cards */}
          <div className="space-y-4">
            {years.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`bg-white border-2 border-${colorScheme.accent}-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}
              >
                <div
                  className={`bg-gradient-to-r from-${colorScheme.from}-500 to-${colorScheme.to}-500 p-6 cursor-pointer`}
                  onClick={() =>
                    setExpandedYear(expandedYear === year ? null : year)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          UPSC Mains {paperNumber} - {year}
                        </h3>
                        <p
                          className={`text-${colorScheme.accent}-100 text-sm mt-1`}
                        >
                          {paperSubtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {year === 2025 && (
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                          LATEST
                        </span>
                      )}
                      {expandedYear === year ? (
                        <ChevronUp className="w-6 h-6 text-white" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedYear === year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 bg-gradient-to-br from-${colorScheme.light}-50 to-white`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">
                          Paper Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-${colorScheme.accent}-500 mt-2`}
                            />
                            <span>
                              <strong>Duration:</strong> 3 Hours
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-${colorScheme.accent}-500 mt-2`}
                            />
                            <span>
                              <strong>Total Marks:</strong> 250
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-${colorScheme.accent}-500 mt-2`}
                            />
                            <span>
                              <strong>Questions:</strong> 20 (250 marks)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-${colorScheme.accent}-500 mt-2`}
                            />
                            <span>
                              <strong>Word Limit:</strong> Varies (150-250
                              words)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col justify-center">
                        <div
                          className={`bg-${colorScheme.accent}-100 border-2 border-${colorScheme.accent}-300 rounded-xl p-6 text-center`}
                        >
                          <FileText
                            className={`w-12 h-12 text-${colorScheme.accent}-600 mx-auto mb-3`}
                          />
                          <h5 className="font-bold text-gray-900 mb-2">
                            Question Paper
                          </h5>
                          <p className="text-sm text-gray-600 mb-4">
                            PDF Format • Authentic UPSC Paper
                          </p>
                          <button
                            onClick={() =>
                              window.open(
                                getDownloadLink(year),
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
                          >
                            <Download className="w-5 h-5" />
                            Download Paper
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> Analyze answer writing patterns,
                        identify frequently asked topics, and practice answer
                        framing within word limits.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Strategy Section */}
          <div
            className={`mt-12 bg-gradient-to-r from-${colorScheme.from}-600 to-${colorScheme.to}-600 rounded-2xl p-8`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Mains Answer Writing Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Analyze Question Trends
                </h4>
                <p className={`text-${colorScheme.accent}-100 text-sm`}>
                  Study which topics are asked repeatedly across years
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Practice Answer Writing
                </h4>
                <p className={`text-${colorScheme.accent}-100 text-sm`}>
                  Write full-length answers within word and time limits
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Get Evaluation
                </h4>
                <p className={`text-${colorScheme.accent}-100 text-sm`}>
                  Have your answers evaluated by mentors or peers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}

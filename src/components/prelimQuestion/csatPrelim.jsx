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
import React from "react";
export default function CSATPYQPage() {
  const [expandedYear, setExpandedYear] = useState(2025);
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  const getDownloadLink = (year) => {
    return `https://drive.google.com/file/d/YOUR_CSAT_FILE_ID_FOR_${year}/view`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/pyq"
              className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to PYQ Hub</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors ml-auto"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-full mb-6">
                <FileText className="w-5 h-5 text-indigo-200" />
                <span className="text-indigo-100">CSAT PYQ Papers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Civil Services Aptitude Test
                <span className="block mt-2 text-indigo-200">
                  GS Paper - II (CSAT)
                </span>
              </h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Download previous year CSAT papers from 2013 to 2025
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

          {/* Qualifying Paper Alert */}
          <div className="mb-8 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">
                  Qualifying Paper (33% Required)
                </h3>
                <p className="text-yellow-800 text-sm">
                  CSAT is a qualifying paper. You need to score minimum 33%
                  (66.67 marks out of 200) to qualify. Marks are NOT counted for
                  final merit list, but failing means elimination.
                </p>
              </div>
            </div>
          </div>

          {/* Year Cards */}
          <div className="space-y-4">
            {years.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white border-2 border-indigo-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 cursor-pointer"
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
                          UPSC CSAT {year}
                        </h3>
                        <p className="text-indigo-100 text-sm mt-1">
                          General Studies Paper - II (CSAT)
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
                    className="p-6 bg-gradient-to-br from-indigo-50 to-white"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">
                          Paper Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                            <span>
                              <strong>Duration:</strong> 2 Hours
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                            <span>
                              <strong>Total Marks:</strong> 200
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                            <span>
                              <strong>Questions:</strong> 80 MCQs
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                            <span>
                              <strong>Qualifying:</strong> 33% (66.67 marks)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="bg-indigo-100 border-2 border-indigo-300 rounded-xl p-6 text-center">
                          <FileText className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                          <h5 className="font-bold text-gray-900 mb-2">
                            Question Paper
                          </h5>
                          <p className="text-sm text-gray-600 mb-4">
                            PDF Format • Authentic UPSC Paper
                          </p>
                          <a
                            href={getDownloadLink(year)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all"
                          >
                            <Download className="w-5 h-5" />
                            Download Paper
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}

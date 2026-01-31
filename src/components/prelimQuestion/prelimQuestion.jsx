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

export default function PrelimsPYQPage() {
  const [expandedYear, setExpandedYear] = useState(2025);
  const driveFileIds = {
    2025: "1YlkhAahxvvqX9io-LAJPMQb8NdMmVllW",
    2024: "1PpKT_iMtHbwBOJYldDVtkbbXoonWzNuG",
    2023: "1e53ujPW4-idxPE2K8_x_Zd27ZHnJKNsr",
    2022: "1P2WruBSJYydOj4QAtQb2OtZpQoRJ3wP9",
    2021: "14qOPHhFO41-FdYMyeHnJzHNf833v5wMM",
    2020: "1nrfA7gDc3MgYaHpJtvhtKGKak56fDe0k",
    2019: "1Md4e8HNOKw9AobJW3aD4VB2c7hW-0X1p",
    2018: "12wbUFz3BCwUlD7BxxfTUkaweWopxA-Y-",
    2017: "121N5LVLbVk-To9X9zpY9RRtbQ8EaZ-bK",
    2016: "10xVno5PZMdho68UomxypH4lOOsuawsQc",
    2015: "1hJGowOSPTRMBgV17FSPaleoHEJrmVcp9",
    2014: "1JG5SUOS7sMh9866z8gus-hKBPU1jfY7P",
    2013: "1y9q6QZ_vlXV75KAipFKNZYiIAbmh3Uer",
    // add till 2013
  };
  // Generate years from 2025 to 2013
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  // Placeholder download links - Replace with your actual Google Drive links
  const getDownloadLink = (year) => {
    const fileId = driveFileIds[year];
    return fileId ? `https://drive.google.com/file/d/${fileId}/view` : "#";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to PYQ Hub</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors ml-auto"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full mb-6">
                <FileText className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">Prelims PYQ Papers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Civil Services Prelims
                <span className="block mt-2 text-blue-200">GS Paper - I</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Download previous year question papers from 2013 to 2025
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
                className="bg-white border-2 border-blue-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {/* Year Header */}
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 cursor-pointer"
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
                          UPSC Prelims {year}
                        </h3>
                        <p className="text-blue-100 text-sm mt-1">
                          General Studies Paper - I
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

                {/* Expanded Content */}
                {expandedYear === year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-white"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Paper Info */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">
                          Paper Details
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                            <span>
                              <strong>Duration:</strong> 2 Hours
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                            <span>
                              <strong>Total Marks:</strong> 200
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                            <span>
                              <strong>Questions:</strong> 100 MCQs
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                            <span>
                              <strong>Negative Marking:</strong> 1/3rd for each
                              wrong answer
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Download Section */}
                      <div className="flex flex-col justify-center">
                        <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6 text-center">
                          <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
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
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
                          >
                            <Download className="w-5 h-5" />
                            Download Paper
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> This is the authentic question
                        paper from UPSC. Practice it under exam conditions for
                        best results.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How to Use PYQs Effectively
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Solve Under Time Limit
                </h4>
                <p className="text-blue-100 text-sm">
                  Practice each paper in 2 hours to simulate real exam
                  conditions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Identify Patterns
                </h4>
                <p className="text-blue-100 text-sm">
                  Note recurring topics and question types across years
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Revise Weak Areas
                </h4>
                <p className="text-blue-100 text-sm">
                  Focus on topics where you make most mistakes
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

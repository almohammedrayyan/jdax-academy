import { Link } from "react-router-dom";
import {
  ChevronDown,
  Download,
  FileQuestion,
  Clock,
  FileText,
  CheckCircle,
} from "lucide-react";
import React from "react";
const metadata = {
  title: "GROUP 4 PYQ Papers (2021-2025) - TNPSC",
  description:
    "Download GROUP 4 Previous Year Question Papers from 2021 to 2025 for TNPSC preparation.",
};

const years = [
  { year: 2025, status: "latest" },
  { year: 2024, status: "available" },
  { year: 2023, status: "available" },
  { year: 2022, status: "available" },
  { year: 2021, status: "available" },
];

function getDownloadLink(year) {
  return `https://drive.google.com/file/d/YOUR_TNPSC_GROUP4_${year}_FILE_ID/view`;
}

export default function Group4PYQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6 flex-wrap">
            <Link
              to="/resource/tnpsc-page"
              className="hover:text-purple-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <Link
              to="/resource/tnpsc-pyq"
              className="hover:text-purple-600 transition-colors"
            >
              PYQ Papers
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">GROUP 4</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-purple-100 rounded-xl">
              <FileQuestion className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GROUP 4 PYQs
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                Junior Assistants, Typists & Steno-Typists
              </p>
            </div>
          </div>

          {/* Paper Details */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">3 Hours</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-pink-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Total Marks</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">200</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Questions</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">200 MCQs</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-red-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-sm font-medium">Negative Marking</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">1/4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {years.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-slate-200 hover:border-purple-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <FileQuestion className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900">
                            GROUP 4 Exam {item.year}
                          </h3>
                          {item.status === "latest" && (
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                              LATEST
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600">
                          Previous Year Question Paper
                        </p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a
                      href={getDownloadLink(item.year)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              Smart Preparation Tips for GROUP 4
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Focus on Basics
                </h4>
                <p className="text-sm text-slate-600">
                  GROUP 4 focuses on General Studies and Tamil. Master NCERT
                  level concepts thoroughly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Speed Practice
                </h4>
                <p className="text-sm text-slate-600">
                  Practice solving 200 questions in 3 hours. Time management is
                  crucial for success.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-bold text-slate-900 mb-2">Mock Tests</h4>
                <p className="text-sm text-slate-600">
                  Take regular mock tests using PYQs to identify weak areas and
                  improve accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              to="/resource/tnpsc-page"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All PYQ Papers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

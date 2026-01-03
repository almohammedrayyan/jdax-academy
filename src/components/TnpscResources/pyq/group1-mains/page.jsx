import { Link } from "react-router-dom";
import {
  ChevronDown,
  Download,
  FileText,
  Clock,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import React from "react";
const metadata = {
  title: "GROUP 1 Mains PYQ Papers (2021-2025) - TNPSC",
  description:
    "Download GROUP 1 Mains Previous Year Question Papers from 2021 to 2025 for TNPSC preparation.",
};

const years = [
  { year: 2025, status: "latest" },
  { year: 2024, status: "available" },
  { year: 2023, status: "available" },
  { year: 2022, status: "available" },
  { year: 2021, status: "available" },
];

function getDownloadLink(year) {
  return `https://drive.google.com/file/d/YOUR_TNPSC_GROUP1_MAINS_${year}_FILE_ID/view`;
}

export default function Group1MainsPYQPage() {
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
                background: "linear-gradient(to right, #10b981, #14b8a6)",
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
              className="hover:text-emerald-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <Link
              to="/resource/tnpsc-pyq"
              className="hover:text-emerald-600 transition-colors"
            >
              PYQ Papers
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">GROUP 1 Mains</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-emerald-100 rounded-xl">
              <FileText className="w-10 h-10 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                GROUP 1 Mains PYQs
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                Combined Civil Services - Main Examination
              </p>
            </div>
          </div>

          {/* Paper Details */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">3 Hours</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Total Marks</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">300</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Questions</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">Descriptive</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Type</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">Subjective</p>
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
                className="bg-white rounded-xl shadow-lg border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <FileText className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900">
                            GROUP 1 Mains {item.year}
                          </h3>
                          {item.status === "latest" && (
                            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
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
                      className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
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
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              Answer Writing Tips for Mains
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Structure Matters
                </h4>
                <p className="text-sm text-slate-600">
                  Use introduction, body, and conclusion format. Bullet points
                  help in clarity.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Precise Answers
                </h4>
                <p className="text-sm text-slate-600">
                  Stick to word limits. Quality over quantity - write relevant
                  points only.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">📖</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Practice Daily
                </h4>
                <p className="text-sm text-slate-600">
                  Write at least 3-5 answers daily. Get them evaluated for
                  improvement.
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

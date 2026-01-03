import { Link } from "react-router-dom";
import {
  ChevronDown,
  MapPin,
  Download,
  BookOpen,
  Languages,
} from "lucide-react";
import React from "react";
const metadata = {
  title: "JDAX's TNPSC Where To Study - Complete Study Guide",
  description:
    "Curated study resources and recommendations for TNPSC GS and Tamil preparation by JDAX Academy.",
};

const gsResources = [
  {
    title: "GS WHERE TO STUDY",
    description: "Complete resource guide for General Studies preparation",
    fileName: "TNPSC_GS_Where_To_Study.pdf",
    fileId: "YOUR_TNPSC_GS_WHERE_TO_STUDY_FILE_ID",
    icon: BookOpen,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    topics: [
      "Polity & Governance",
      "History & Culture",
      "Geography & Environment",
      "Economy & Development",
      "Science & Technology",
      "Current Affairs",
    ],
  },
  {
    title: "TAMIL WHERE TO STUDY",
    description: "Complete resource guide for Tamil language preparation",
    fileName: "TNPSC_Tamil_Where_To_Study.pdf",
    fileId: "YOUR_TNPSC_TAMIL_WHERE_TO_STUDY_FILE_ID",
    icon: Languages,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    topics: [
      "Tamil Grammar",
      "Tamil Literature",
      "Tamil History",
      "Tamil Culture",
      "Modern Tamil",
      "Practice Questions",
    ],
  },
];

function getDownloadLink(fileId) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export default function TNPSCWhereToStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: `linear-gradient(to right, ${
                  i % 2 === 0 ? "#9333ea, #ec4899" : "#3b82f6, #6366f1"
                })`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6 flex-wrap">
            <Link
              to="/resource/tnpsc-page"
              className="hover:text-purple-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">Where To Study</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-purple-100 rounded-xl">
              <MapPin className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                JDAX's TNPSC Where To Study?
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                Curated study resources by JDAX Academy experts
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">2</div>
                <div className="text-slate-600">Study Guides</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Languages className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  GS + Tamil
                </div>
                <div className="text-slate-600">Complete Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-pink-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  Expert Curated
                </div>
                <div className="text-slate-600">By JDAX Academy</div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-1">
                  About These Study Guides
                </h3>
                <p className="text-purple-800 text-sm">
                  These comprehensive guides have been curated by JDAX Academy's
                  expert faculty, covering exactly which resources to study for
                  each topic. Download the PDFs to get detailed book
                  recommendations, chapter-wise coverage, and topic priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {gsResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-purple-300 transition-all duration-300"
              >
                {/* Resource Header */}
                <div
                  className={`bg-gradient-to-r ${resource.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{resource.title}</h2>
                      <p className="text-white/90 text-lg mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resource Content */}
                <div className="p-6">
                  {/* Topics Covered */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Topics Covered:
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      {resource.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className={`${
                            resource.bgColor
                          } rounded-lg p-3 border-l-4 border-${
                            resource.iconColor.split("-")[1]
                          }-500`}
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className={`w-4 h-4 ${resource.iconColor}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm font-medium text-slate-900">
                              {topic}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="flex items-center justify-between gap-4 p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${resource.bgColor} rounded-lg`}>
                        <svg
                          className={`w-6 h-6 ${resource.iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">
                          {resource.fileName}
                        </div>
                        <div className="text-sm text-slate-600">
                          Comprehensive study guide PDF
                        </div>
                      </div>
                    </div>

                    <a
                      to={getDownloadLink(resource.fileId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${resource.color} hover:opacity-90 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Why Use JDAX's Study Guides?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Focused Approach
                </h4>
                <p className="text-sm text-slate-600">
                  Study only what's required. No unnecessary content, no wasted
                  time.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Expert Recommendations
                </h4>
                <p className="text-sm text-slate-600">
                  Curated by faculty who understand TNPSC exam patterns
                  thoroughly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Time Efficient
                </h4>
                <p className="text-sm text-slate-600">
                  Optimize your preparation time with chapter-wise priority
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-6xl mx-auto mt-8 text-center">
          <Link
            to="/tnpsc"
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
            Back to TNPSC Resources
          </Link>
        </div>
      </section>
    </div>
  );
}

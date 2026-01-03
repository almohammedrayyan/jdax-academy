import { Link } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  Download,
  Sprout,
  Heart,
  GraduationCap,
  Building2,
  Shield,
} from "lucide-react";
import React from "react";
const metadata = {
  title: "JDAX's TNPSC Policy Notes - Complete Collection",
  description:
    "Comprehensive policy notes covering Agriculture, Health, Education, Economy, and Administration for TNPSC preparation.",
};

const policyCategories = [
  {
    title: "Agriculture and environment",
    icon: Sprout,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    notes: [
      {
        name: "AGRICULTURE AND FARMERS WELFARE",
        fileId: "YOUR_AGRICULTURE_FARMERS_WELFARE_FILE_ID",
      },
      {
        name: "ENVIRONMENT AND CLIMATE CHANGE",
        fileId: "YOUR_ENVIRONMENT_CLIMATE_CHANGE_FILE_ID",
      },
    ],
  },
  {
    title: "Health and social welfare",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    notes: [
      {
        name: "HEALTH AND FAMILY WELFARE",
        fileId: "YOUR_HEALTH_FAMILY_WELFARE_FILE_ID",
      },
      {
        name: "SOCIAL WELFARE AND WOMEN EMPOWERMENT",
        fileId: "YOUR_SOCIAL_WELFARE_WOMEN_EMPOWERMENT_FILE_ID",
      },
      {
        name: "WELFARE OF DIFFERENTLY ABLED",
        fileId: "YOUR_WELFARE_DIFFERENTLY_ABLED_FILE_ID",
      },
      {
        name: "BACKWARD CLASSES AND MBC WELFARE",
        fileId: "YOUR_BACKWARD_CLASSES_MBC_WELFARE_FILE_ID",
      },
      { name: "MINORITIES WELFARE", fileId: "YOUR_MINORITIES_WELFARE_FILE_ID" },
    ],
  },
  {
    title: "Education and language",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    notes: [
      { name: "HIGHER EDUCATION", fileId: "YOUR_HIGHER_EDUCATION_FILE_ID" },
      { name: "SCHOOL EDUCATION", fileId: "YOUR_SCHOOL_EDUCATION_FILE_ID" },
      { name: "TAMIL DEVELOPMENT", fileId: "YOUR_TAMIL_DEVELOPMENT_FILE_ID" },
    ],
  },
  {
    title: "Economy and infrastructure",
    icon: Building2,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    notes: [
      {
        name: "INDUSTRIES AND COMMERCE",
        fileId: "YOUR_INDUSTRIES_COMMERCE_FILE_ID",
      },
      { name: "TOURISM", fileId: "YOUR_TOURISM_FILE_ID" },
    ],
  },
  {
    title: "Administration and disaster management",
    icon: Shield,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    notes: [
      {
        name: "REVENUE AND DISASTER MANAGEMENT",
        fileId: "YOUR_REVENUE_DISASTER_MANAGEMENT_FILE_ID",
      },
    ],
  },
];

function getDownloadLink(fileId) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export default function TNPSCPolicyNotesPage() {
  const totalNotes = policyCategories.reduce(
    (sum, cat) => sum + cat.notes.length,
    0
  );

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
                  i % 2 === 0 ? "#f97316, #dc2626" : "#8b5cf6, #7c3aed"
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
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <Link
              to="/resource/tnpsc-page"
              className="hover:text-orange-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">Policy Notes</span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-orange-100 rounded-xl">
              <FileText className="w-10 h-10 text-orange-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                JDAX's TNPSC Policy Notes
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                Comprehensive policy notes for all major sectors
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {totalNotes}
                </div>
                <div className="text-slate-600">Policy Notes</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {policyCategories.length}
                </div>
                <div className="text-slate-600">Categories</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Updated</div>
                <div className="text-slate-600">Latest Policies</div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-orange-600"
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
                <h3 className="font-semibold text-orange-900 mb-1">
                  About These Policy Notes
                </h3>
                <p className="text-orange-800 text-sm">
                  These notes cover major government policies, schemes, and
                  initiatives relevant to TNPSC exams. Each PDF contains
                  detailed analysis, implementation status, and exam-focused
                  content to help you ace current affairs and policy-related
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Categories Section */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {policyCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-orange-300 transition-all duration-300"
              >
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold capitalize">
                        {category.title}
                      </h2>
                      <p className="text-white/90 text-lg mt-1">
                        {category.notes.length} Policy Notes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Policy Notes List */}
                <div className="p-6 space-y-4">
                  {category.notes.map((note, noteIndex) => (
                    <div
                      key={noteIndex}
                      className="flex items-center justify-between gap-4 p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`p-3 ${category.bgColor} rounded-lg`}>
                          <svg
                            className={`w-6 h-6 ${category.iconColor}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">
                            {note.name}
                          </div>
                          <div className="text-sm text-slate-600">
                            Policy Note PDF
                          </div>
                        </div>
                      </div>

                      <a
                        href={getDownloadLink(note.fileId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${category.color} hover:opacity-90 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap`}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Usage Tips Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
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
              How to Use These Policy Notes Effectively
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Make Short Notes
                </h4>
                <p className="text-sm text-slate-600">
                  Create concise summaries of key schemes, objectives, and
                  implementation details.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Regular Revision
                </h4>
                <p className="text-sm text-slate-600">
                  Revise policy notes monthly to stay updated with schemes and
                  their progress.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Connect with News
                </h4>
                <p className="text-sm text-slate-600">
                  Link these policies with current affairs for better retention
                  and application.
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

      {/* <Footer /> */}
    </div>
  );
}

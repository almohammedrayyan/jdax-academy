import { Link } from "react-router-dom";
import { ChevronDown, FileQuestion, BookOpen, FileText } from "lucide-react";
import React from "react";
const metadata = {
  title: "TNPSC Previous Year Papers - All Groups",
  description:
    "Download TNPSC previous year question papers from 2021-2025 for Group 1, Group 2, 2A, and Group 4 exams.",
};

const pyqGroups = [
  {
    title: "GROUP 1 PYQs",
    description: "Combined Civil Services Examination papers",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    subCategories: [
      {
        name: "Prelims PYQs",
        href: "/resource/group-one-main-pyq",
        years: "2021-2025",
        icon: BookOpen,
      },
      {
        name: "Mains PYQs",
        href: "/resource/group-one-prelim-pyq",
        years: "2021-2025",
        icon: FileText,
      },
    ],
  },
  {
    title: "GROUP 2 & 2A PYQs",
    description: "Non-Interview Posts examination papers",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    subCategories: [
      {
        name: "Prelims PYQs",
        href: "/resource/group-two-main-pyq",
        years: "2021-2025",
        icon: BookOpen,
      },
      {
        name: "Mains PYQs",
        href: "/resource/group-two-prelim-pyq",
        years: "2021-2025",
        icon: FileText,
      },
    ],
  },
  {
    title: "GROUP 4 PYQs",
    description: "Junior Assistants, Typists & Steno-Typists papers",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    subCategories: [
      {
        name: "Previous Year Papers",
        href: "/resource/group-4-pyq",
        years: "2021-2025",
        icon: FileQuestion,
      },
    ],
  },
];

export default function TNPSCPYQPage1() {
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
                  i % 2 === 0 ? "#3b82f6, #6366f1" : "#8b5cf6, #ec4899"
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
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
            <Link
              to="/resource/tnpsc-page"
              className="hover:text-blue-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">PYQ Papers</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            TNPSC Previous Year Papers
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            Download TNPSC question papers from 2021-2025 for all groups.
            Practice with authentic exam papers to ace your preparation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileQuestion className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-slate-600">Papers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">3</div>
                <div className="text-slate-600">Exam Groups</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  2021-2025
                </div>
                <div className="text-slate-600">Recent Papers</div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-amber-600"
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
                <h3 className="font-semibold text-amber-900 mb-1">
                  How to Use These Papers
                </h3>
                <p className="text-amber-800 text-sm">
                  Click on any category below to access year-wise papers. Each
                  paper opens in a new tab from Google Drive where you can
                  download or print it. Solve these papers in timed conditions
                  to simulate the actual exam environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PYQ Groups */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {pyqGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Group Header */}
              <div className={`bg-gradient-to-r ${group.color} p-6 text-white`}>
                <h2 className="text-3xl font-bold mb-2">{group.title}</h2>
                <p className="text-white/90 text-lg">{group.description}</p>
              </div>

              {/* Sub-categories */}
              <div className="p-6 grid md:grid-cols-2 gap-4">
                {group.subCategories.map((subCat, subIndex) => {
                  const Icon = subCat.icon;
                  return (
                    <Link
                      key={subIndex}
                      to={subCat.href}
                      className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`p-3 ${group.bgColor} rounded-lg group-hover:scale-110 transition-transform`}
                            >
                              <Icon className={`w-6 h-6 ${group.textColor}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {subCat.name}
                              </h3>
                              <p className="text-sm text-slate-600">
                                {subCat.years}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="transform translate-x-0 group-hover:translate-x-2 transition-transform">
                          <svg
                            className="w-6 h-6 text-slate-400 group-hover:text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

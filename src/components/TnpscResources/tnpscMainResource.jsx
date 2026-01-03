import React from "react";
import { Link } from "react-router-dom";
import { FileText, BookOpen, MapPin, FileQuestion } from "lucide-react";

export const metadata = {
  title: "TNPSC Resources - Complete Study Material",
  description:
    "Comprehensive TNPSC resources including syllabus downloads, previous year papers, study guides, and policy notes for Group 1, 1A, 2, 2A, and 4 exams.",
};

const resources = [
  {
    title: "Syllabus Downloads",
    description:
      "Download official syllabus for all TNPSC exams - Group 1, 1A, 2, 2A & 4",
    icon: BookOpen,
    href: "/resource/tnpsc-syllabus",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    count: "10+ Documents",
  },
  {
    title: "Previous Year Papers",
    description: "Access TNPSC question papers from 2021-2025 for all groups",
    icon: FileQuestion,
    href: "/resource/tnpsc-pyq",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    count: "15+ Papers",
  },
  {
    title: "JDAX's TNPSC Where To Study?",
    description: "Expert-curated study resources for GS and Tamil preparation",
    icon: MapPin,
    href: "/resource/where-study",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    count: "2 Study Guides",
  },
  {
    title: "JDAX's TNPSC Policy Notes",
    description: "Comprehensive policy notes covering 13 major sectors",
    icon: FileText,
    href: "/resource/tnpsc-policy",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    count: "13 Policy Notes",
  },
];

const TNPSCResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: `linear-gradient(to right, ${
                  i % 2 === 0 ? "#10b981, #14b8a6" : "#3b82f6, #6366f1"
                })`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
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
            Back to UPSC Resources
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            TNPSC Resources
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Your complete guide to Tamil Nadu Public Service Commission exams.
            Access syllabus, previous papers, study guides, and expert notes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                30+
              </div>
              <div className="text-slate-600">Total Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-slate-600">Resource Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                Free
              </div>
              <div className="text-slate-600">All Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={index}
                  to={resource.href}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div className="relative p-8">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl ${resource.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${resource.textColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {resource.description}
                    </p>

                    {/* Count Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">
                      <FileText className="w-4 h-4" />
                      {resource.count}
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-8 right-8 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
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
      </section>
    </div>
  );
};

export default TNPSCResourcesPage;

import { Link } from "react-router-dom";
import {
  ChevronDown,
  Download,
  FileText,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import React from "react";
export const metadata = {
  title: "TNPSC Syllabus Downloads - All Groups",
  description:
    "Download official TNPSC syllabus for Group 1, 1A, 2, 2A, and 4 exams. Get Prelims, Mains, and Tamil Eligibility syllabus PDFs.",
};

const syllabusData = [
  {
    groupTitle: "GROUP 1",
    groupSubtitle: "Combined Civil Services Examination",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    items: [
      {
        title: "Group 1 Prelims Syllabus",
        description:
          "Preliminary examination syllabus with objective type questions",
        fileId: "YOUR_GROUP1_PRELIMS_FILE_ID",
      },
      {
        title: "Group 1 Mains Syllabus",
        description: "Main examination syllabus with descriptive papers",
        fileId: "YOUR_GROUP1_MAINS_FILE_ID",
      },
    ],
  },
  {
    groupTitle: "GROUP 1A",
    groupSubtitle: "Combined Civil Services Examination - I",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    items: [
      {
        title: "Group 1A Mains Exam Plan & Syllabus",
        description:
          "Complete examination plan and detailed syllabus for Group 1A",
        fileId: "YOUR_GROUP1A_MAINS_FILE_ID",
      },
    ],
  },
  {
    groupTitle: "GROUP 2 & 2A",
    groupSubtitle: "Non-Interview Posts",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    items: [
      {
        title: "Group 2 & 2A Prelims Syllabus",
        description: "Preliminary examination syllabus for both Group 2 and 2A",
        fileId: "YOUR_GROUP2_PRELIMS_FILE_ID",
      },
      {
        title: "Group 2 Mains Syllabus",
        description: "Main examination syllabus for Group 2 posts",
        fileId: "YOUR_GROUP2_MAINS_FILE_ID",
      },
      {
        title: "Group 2A Mains Syllabus",
        description: "Main examination syllabus for Group 2A posts",
        fileId: "YOUR_GROUP2A_MAINS_FILE_ID",
      },
      {
        title: "Group 2 & 2A Tamil Eligibility Syllabus",
        description: "Tamil language eligibility test syllabus",
        fileId: "YOUR_GROUP2_TAMIL_FILE_ID",
      },
    ],
  },
  {
    groupTitle: "GROUP 4",
    groupSubtitle: "Junior Assistants, Typists & Steno-Typists",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    items: [
      {
        title: "Group 4 Syllabus",
        description: "Complete syllabus for Group 4 examination",
        fileId: "YOUR_GROUP4_FILE_ID",
      },
    ],
  },
];

function DownloadButton({ fileId, title }) {
  return (
    <a
      to={`https://drive.google.com/file/d/${fileId}/view`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg group-hover:scale-105"
    >
      <Download className="w-5 h-5" />
      Download
    </a>
  );
}

function SyllabusGroupCard({ group }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
      {/* Group Header */}
      <div className={`bg-gradient-to-r ${group.color} p-6 text-white`}>
        <h2 className="text-3xl font-bold mb-2">{group.groupTitle}</h2>
        <p className="text-white/90 text-lg">{group.groupSubtitle}</p>
      </div>

      {/* Items */}
      <div className="divide-y divide-slate-200">
        {group.items.map((item, index) => (
          <div
            key={index}
            className="p-6 hover:bg-slate-50 transition-colors duration-200 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-slate-400" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 ml-8">{item.description}</p>
              </div>

              {/* Download Button */}
              <DownloadButton fileId={item.fileId} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TNPSCSyllabusPage() {
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

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
            <Link
              to="/resource/tnpsc-page"
              className="hover:text-emerald-600 transition-colors"
            >
              TNPSC Resources
            </Link>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">
              Syllabus Downloads
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            TNPSC Syllabus Downloads
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            Download official TNPSC syllabus for all groups. Get complete exam
            patterns, detailed topics, and marking schemes for your preparation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-slate-600">Documents</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5</div>
                <div className="text-slate-600">Exam Groups</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Free</div>
                <div className="text-slate-600">All Downloads</div>
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
                  How to Use These Downloads
                </h3>
                <p className="text-amber-800 text-sm">
                  Click the "Download" button to open the syllabus PDF in a new
                  tab. You can then download or print it directly from Google
                  Drive. Make sure you have a Google account to access the
                  files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Groups */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {syllabusData.map((group, index) => (
            <SyllabusGroupCard key={index} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { FileText, Clock, CheckCircle } from "lucide-react";

export default function MainsGuidePage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Mains Guide" },
  ];

  const resources = [
    {
      title: "Understanding Prelims",
      href: "/new-to-upsc/prelims-guide",
      icon: "book",
    },
    {
      title: "Interview Guide",
      href: "/new-to-upsc/interview-guide",
      icon: "message",
    },
    {
      title: "Optional Subjects List",
      href: "https://www.upsc.gov.in",
      icon: "file",
      external: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={4}
        totalSteps={7}
        title="Understanding Mains"
      />

      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Mains Exam: Paper Structure, Syllabus & Answer Writing
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1">⏱️ 8-minute read</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The <strong>Main Examination</strong> is the second stage where
            candidates are tested through{" "}
            <strong>descriptive written papers</strong>. This stage determines
            your <strong>merit rank</strong>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-7 h-7 text-purple-600" />
            Complete Paper Structure (9 Papers)
          </h2>

          {/* TABLE */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left font-bold">Paper</th>
                  <th className="p-4 text-left font-bold">Subject</th>
                  <th className="p-4 text-left font-bold">Marks</th>
                  <th className="p-4 text-left font-bold">Duration</th>
                  <th className="p-4 text-left font-bold">Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-amber-50">
                  <td className="p-4">Paper-A</td>
                  <td className="p-4 font-semibold">
                    Indian Language (8th Schedule)
                  </td>
                  <td className="p-4">300</td>
                  <td className="p-4">3 Hours</td>
                  <td className="p-4 font-bold">Qualifying</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-4">Paper-B</td>
                  <td className="p-4 font-semibold">English</td>
                  <td className="p-4">300</td>
                  <td className="p-4">3 Hours</td>
                  <td className="p-4 font-bold">Qualifying</td>
                </tr>
                <tr>
                  <td className="p-4">Paper-I</td>
                  <td className="p-4 font-semibold">Essay</td>
                  <td className="p-4 font-bold text-purple-600">250</td>
                  <td className="p-4">3 Hours</td>
                  <td className="p-4 font-bold text-green-600">Merit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Important Note
            </h3>
            <p className="text-gray-700">
              Language papers are qualifying only. Only the 7 merit papers (1750
              marks) count for ranking.
            </p>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            UPSC Mains determines your final merit rank. Strong writing skills,
            structure, and optional subject strategy are critical for success.
          </p>
        </KeyTakeawayBox>

        <div className="my-8 text-center">
          <PDFExportButton title="UPSC Mains Guide" />
        </div>

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "Understanding Prelims",
            href: "/new-to-upsc/prelims-guide",
          }}
          next={{
            title: "Personality Test Guide",
            href: "/new-to-upsc/interview-guide",
          }}
        />
      </article>
    </div>
  );
}

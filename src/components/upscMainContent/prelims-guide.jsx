import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { FileCheck, AlertTriangle, TrendingUp } from "lucide-react";

export default function PrelimsGuidePage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Prelims Guide" },
  ];

  const resources = [
    {
      title: "Exam Stages Overview",
      href: "/new-to-upsc/exam-stages-timeline",
      icon: "calendar",
    },
    {
      title: "Understanding Mains",
      href: "/new-to-upsc/mains-guide",
      icon: "book",
    },
    {
      title: "UPSC Official Syllabus",
      href: "https://www.upsc.gov.in",
      icon: "file",
      external: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={3}
        totalSteps={7}
        title="Understanding Prelims"
      />

      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Prelims Exam: Pattern, Syllabus & Strategy Guide
          </h1>
          <div className="text-gray-600">⏱️ 7-minute read</div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Preliminary Examination, commonly called{" "}
            <strong>Prelims</strong>, is the first stage and acts as a
            <strong> screening test</strong> to shortlist candidates for the
            Main Examination.
          </p>

          {/* Paper Structure */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileCheck className="w-7 h-7 text-purple-600" />
            Paper Structure
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left">Paper</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Questions</th>
                  <th className="p-4 text-left">Marks</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-bold">Paper-I</td>
                  <td className="p-4">General Studies</td>
                  <td className="p-4">100 MCQs</td>
                  <td className="p-4">200</td>
                  <td className="p-4">2 Hours</td>
                  <td className="p-4">Merit</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Paper-II</td>
                  <td className="p-4">CSAT</td>
                  <td className="p-4">80 MCQs</td>
                  <td className="p-4">200</td>
                  <td className="p-4">2 Hours</td>
                  <td className="p-4">Qualifying (33%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Negative Marking */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Negative Marking
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 1/3rd marks deducted for wrong answers</li>
              <li>• Applies to both GS & CSAT</li>
              <li>• No penalty for unattempted questions</li>
              <li>• Avoid blind guessing</li>
            </ul>
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Key Points About Prelims
            </h3>
            <ul className="space-y-3">
              <li>★ Prelims is only a screening test</li>
              <li>★ CSAT is qualifying in nature</li>
              <li>★ Only GS score decides selection</li>
              <li>★ Around 10,000–15,000 qualify for Mains</li>
              <li>★ Both papers held on the same day</li>
            </ul>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            UPSC Prelims consists of two objective papers. GS decides merit
            while CSAT is qualifying. Negative marking applies, and only ~10,000
            candidates move to Mains.
          </p>
        </KeyTakeawayBox>

        <div className="my-8 text-center">
          <PDFExportButton title="UPSC Prelims Guide" />
        </div>

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "Exam Stages & Timeline",
            href: "/new-to-upsc/exam-stages-timeline",
          }}
          next={{
            title: "Understanding Mains",
            href: "/new-to-upsc/mains-guide",
          }}
        />
      </article>
    </div>
  );
}

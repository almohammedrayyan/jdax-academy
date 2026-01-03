import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { Calendar, Clock, Award } from "lucide-react";

export default function ExamStagesTimelinePage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Exam Stages & Timeline" },
  ];

  const resources = [
    {
      title: "Understanding Prelims",
      href: "/new-to-upsc/prelims-guide",
      icon: "book",
    },
    {
      title: "Understanding Mains",
      href: "/new-to-upsc/mains-guide",
      icon: "book",
    },
    {
      title: "Interview Guide",
      href: "/new-to-upsc/interview-guide",
      icon: "message",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={2}
        totalSteps={7}
        title="Exam Stages and Timeline"
      />

      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Exam Stages and Timeline: Complete Journey Explained
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>⏱️ 5-minute read</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The UPSC Civil Services Examination is a{" "}
            <strong>three-stage selection process</strong> designed to test
            candidates comprehensively across knowledge, application, and
            personality dimensions.
          </p>

          {/* Three Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Preliminary Examination",
                points: [
                  "Objective Type (MCQ)",
                  "2 Papers (400 Marks)",
                  "Qualifying Nature (Screening)",
                  "Negative Marking",
                  "Duration: 2 Hours per paper",
                  "Cutoff determines Mains eligibility",
                ],
              },
              {
                title: "Main Examination",
                points: [
                  "Descriptive Type (Written)",
                  "9 Papers (1750 Marks)",
                  "Merit Ranking Basis",
                  "No Negative Marking",
                  "Duration: 3 Hours per paper",
                  "Tests in-depth knowledge & writing",
                ],
              },
              {
                title: "Personality Test (Interview)",
                points: [
                  "Personal Interview",
                  "275 Marks",
                  "Final Merit Ranking",
                  "Board of Experts",
                  "Duration: 30-45 minutes",
                  "Personality & suitability test",
                ],
              },
            ].map((stage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2">{stage.title}</h3>
                <ul className="space-y-2 text-sm">
                  {stage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Final Selection Formula
            </h3>
            <p className="text-gray-700 mb-2">
              Final Merit = Mains Score (1750) + Interview Score (275) ={" "}
              <strong>2025 Marks</strong>
            </p>
            <p className="text-sm text-gray-600 italic">
              Prelims marks are NOT counted for final ranking.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Calendar className="w-7 h-7 text-purple-600" />
            Exam Timeline (Typical Annual Schedule)
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Total Time Investment
            </h3>
            <p className="text-gray-700">
              The UPSC CSE process spans approximately{" "}
              <strong>15–16 months</strong>. Preparation usually requires{" "}
              <strong>12–18 months</strong>.
            </p>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            UPSC CSE is a three-stage marathon. Only Mains and Interview marks
            count for final ranking. Plan at least 12–18 months of preparation.
          </p>
        </KeyTakeawayBox>

        <div className="my-8 text-center">
          <PDFExportButton title="Exam Stages and Timeline" />
        </div>

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "What is UPSC CSE",
            href: "/new-to-upsc/what-is-upsc-cse",
          }}
          next={{
            title: "Understanding Prelims",
            href: "/new-to-upsc/prelims-guide",
          }}
        />
      </article>
    </div>
  );
}

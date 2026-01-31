import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { Building2, Target, Trophy, Users } from "lucide-react";

export default function WhatIsUPSCPage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "What is UPSC CSE" },
  ];

  const resources = [
    {
      title: "UPSC Official Website",
      href: "https://www.upsc.gov.in",
      icon: "file",
      external: true,
    },
    {
      title: "Exam Stages & Timeline",
      href: "/new-to-upsc/exam-stages-timeline",
      icon: "calendar",
    },
    {
      title: "Eligibility Criteria",
      href: "/new-to-upsc/eligibility-criteria",
      icon: "book",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={1}
        totalSteps={7}
        title="What is UPSC Civil Services Exam?"
      />

      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What is UPSC Civil Services Exam?
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>⏱️ 4-minute read</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The{" "}
            <strong>
              Union Public Service Commission (UPSC) Civil Services Examination
              (CSE)
            </strong>{" "}
            is one of India's most prestigious and competitive examinations. It
            serves as the gateway to the country's elite administrative services
            and is conducted annually by the Union Public Service Commission.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard
              icon={<Building2 />}
              title="Conducted By"
              text="Union Public Service Commission (UPSC), established under Article 315 of the Constitution of India"
            />

            <InfoCard
              icon={<Target />}
              title="Purpose"
              text="Recruitment to 24 All India and Central Services including IAS, IPS, IFS, and other Group A services"
            />

            <InfoCard
              icon={<Trophy />}
              title="Frequency"
              text="Conducted once every year with notification typically released in February and Prelims in May/June"
            />

            <InfoCard
              icon={<Users />}
              title="Prestige Level"
              text="Highest civilian examination in India with selection ratio of approximately 0.1%"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Why UPSC CSE is Special
          </h2>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
            <ul className="space-y-4">
              {[
                "Direct entry to India’s most powerful administrative positions",
                "Opportunity to serve the nation at the highest level",
                "Comprehensive exam testing knowledge and personality",
                "Career stability with excellent benefits",
                "Prestige and national respect",
                "24 diverse career paths",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-300 text-2xl">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              📈 Competition Level
            </h3>
            <p className="text-gray-700">
              Around <strong>10–12 lakh candidates</strong> apply every year,
              but only
              <strong> 800–1000 candidates</strong> are selected — a success
              rate of less than
              <strong> 0.1%</strong>.
            </p>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            UPSC Civil Services Examination is India’s most prestigious
            competitive exam, offering entry into 24 elite services with
            unmatched opportunities to serve the nation.
          </p>
        </KeyTakeawayBox>

        {/* PDF Export */}
        {/* <div className="my-8 text-center">
          <PDFExportButton title="What is UPSC Civil Services Exam" />
        </div> */}

        {/* Related Resources */}
        <RelatedResources resources={resources} />

        {/* Navigation */}
        <PrevNextNavigation
          next={{
            title: "Exam Stages and Timeline",
            href: "/new-to-upsc/exam-stages-timeline",
          }}
        />
      </article>
    </div>
  );
}

/* Helper Card Component */
function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

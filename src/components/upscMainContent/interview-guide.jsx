import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { Users, Target, TrendingUp, AlertTriangle } from "lucide-react";

export default function InterviewGuidePage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Interview Guide" },
  ];

  const resources = [
    {
      title: "Understanding Mains",
      href: "/new-to-upsc/mains-guide",
      icon: "book",
    },
    {
      title: "Career Services",
      href: "/new-to-upsc/career-services",
      icon: "book",
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
        currentStep={5}
        totalSteps={7}
        title="Personality Test (Interview)"
      />

      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Personality Test: Interview Structure, Preparation & Common
            Mistakes
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>⏱️ 6-minute read</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The <strong>Personality Test</strong> (Interview) is the final stage
            of UPSC CSE carrying <strong>275 marks</strong>, assessing a
            candidate’s suitability for public service.
          </p>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-7 h-7 text-purple-600" />
            Interview Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard title="⏱️ Duration">30–45 minutes (may vary)</InfoCard>
            <InfoCard title="👥 Board Composition">
              4–5 members including Chairman
            </InfoCard>
            <InfoCard title="📈 Marks Distribution">
              275 marks (~13.5% of total)
            </InfoCard>
            <InfoCard title="📍 Location">Dholpur House, New Delhi</InfoCard>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-7 h-7 text-purple-600" />
            What Is Assessed?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard title="🎯 Mental Alertness">
              Presence of mind and clarity under pressure
            </InfoCard>
            <InfoCard title="🧠 Critical Thinking">
              Balanced analysis and judgment
            </InfoCard>
            <InfoCard title="💡 Clear Expression">
              Communication and articulation skills
            </InfoCard>
            <InfoCard title="🤝 Social Cohesion">
              Empathy, leadership, teamwork
            </InfoCard>
            <InfoCard title="💪 Moral Integrity">
              Ethics, honesty, values
            </InfoCard>
            <InfoCard title="🎓 Academic Awareness">
              Applying knowledge practically
            </InfoCard>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-7 h-7 text-purple-600" />
            Scoring Impact
          </h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
            <p className="text-gray-700">
              Average interview marks are <strong>155–165</strong>. Scoring
              <strong> 180+</strong> can significantly boost your final rank.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Key Success Strategies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard title="📋 Know Your DAF">
              Every detail can be questioned
            </InfoCard>
            <InfoCard title="🗣️ Mock Interviews">Attend 10–15 mocks</InfoCard>
            <InfoCard title="🎭 Be Authentic">Honesty beats pretence</InfoCard>
            <InfoCard title="⚖️ Balanced Views">
              Avoid extreme opinions
            </InfoCard>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <h3 className="flex items-center gap-2 font-bold mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Common Mistakes
            </h3>
            <ul className="space-y-2">
              <li>❌ Arrogance or defensiveness</li>
              <li>❌ Vague answers</li>
              <li>❌ Pretending to know everything</li>
              <li>❌ Poor body language</li>
            </ul>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            The UPSC Interview is a personality test, not a knowledge exam.
            Authenticity, clarity, balance, and composure can dramatically
            change your final rank.
          </p>
        </KeyTakeawayBox>

        <div className="my-8 text-center">
          <PDFExportButton title="UPSC Interview Guide" />
        </div>

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "Understanding Mains",
            href: "/new-to-upsc/mains-guide",
          }}
          next={{
            title: "Career Services & Prospects",
            href: "/new-to-upsc/career-services",
          }}
        />
      </article>
    </div>
  );
}

/* Small helper card */
function InfoCard({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );
}

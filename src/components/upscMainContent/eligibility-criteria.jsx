import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import {
  CheckCircle,
  Calendar,
  GraduationCap,
  Banknote,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EligibilityCriteriaPage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Eligibility Criteria" },
  ];

  const resources = [
    {
      title: "What is UPSC CSE",
      href: "/new-to-upsc/what-is-upsc-cse",
      icon: "book",
    },
    {
      title: "Career Services",
      href: "/new-to-upsc/career-services",
      icon: "book",
    },
    {
      title: "Official UPSC Notification",
      href: "https://www.upsc.gov.in",
      icon: "file",
      external: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={7}
        totalSteps={7}
        title="Eligibility Criteria"
      />

      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Eligibility Criteria: Age, Education, Attempts & More
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1">⏱️ 5-minute read</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Before applying for the UPSC Civil Services Examination, it's
            crucial to understand the eligibility requirements. Here's a
            comprehensive breakdown of all criteria:
          </p>

          {/* Age Limit */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-7 h-7 text-purple-600" />
            1. Age Limit
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 mb-8">
            <p className="text-gray-700 mb-4">
              Candidates must be <strong>between 21 and 32 years of age</strong>{" "}
              as on 1st August of the exam year.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Category</th>
                    <th className="p-4 text-left font-bold">Minimum Age</th>
                    <th className="p-4 text-left font-bold">Maximum Age</th>
                    <th className="p-4 text-left font-bold">Age Relaxation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">General</td>
                    <td className="p-4">21 years</td>
                    <td className="p-4 font-bold text-purple-600">32 years</td>
                    <td className="p-4">No relaxation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">OBC</td>
                    <td className="p-4">21 years</td>
                    <td className="p-4 font-bold text-purple-600">35 years</td>
                    <td className="p-4">+3 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">SC/ST</td>
                    <td className="p-4">21 years</td>
                    <td className="p-4 font-bold text-purple-600">37 years</td>
                    <td className="p-4">+5 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">
                      PwD (Persons with Disabilities)
                    </td>
                    <td className="p-4">21 years</td>
                    <td className="p-4 font-bold text-purple-600">42 years</td>
                    <td className="p-4">
                      +10 years (Gen), +13 (OBC), +15 (SC/ST)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Ex-Servicemen</td>
                    <td className="p-4">21 years</td>
                    <td className="p-4 font-bold text-purple-600">Varies</td>
                    <td className="p-4">
                      Service period + 3 years (up to 45 years)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Education */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-purple-600" />
            2. Educational Qualifications
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Minimum Requirement:
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>For most services:</strong> Bachelor's degree from a
                recognized university (any discipline)
              </p>
              <p className="text-gray-700">
                <strong>Important:</strong> Candidates appearing in the final
                year/semester of their degree can also apply, provided they
                submit proof of passing by the time of Mains
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Professional and technical
                  qualifications recognized by the Government as equivalent to a
                  degree are also acceptable (e.g., MBBS, B.E./B.Tech, CA, etc.)
                </p>
              </div>
            </div>
          </div>

          {/* Attempts */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle className="w-7 h-7 text-purple-600" />
            3. Number of Attempts
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left font-bold">Category</th>
                  <th className="p-4 text-left font-bold">Maximum Attempts</th>
                  <th className="p-4 text-left font-bold">Upper Age Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">General</td>
                  <td className="p-4 font-bold text-purple-600">6 attempts</td>
                  <td className="p-4">Till 32 years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">OBC</td>
                  <td className="p-4 font-bold text-purple-600">9 attempts</td>
                  <td className="p-4">Till 35 years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">SC/ST</td>
                  <td className="p-4 font-bold text-purple-600">
                    Unlimited (till age limit)
                  </td>
                  <td className="p-4">Till 37 years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">EWS</td>
                  <td className="p-4 font-bold text-purple-600">6 attempts</td>
                  <td className="p-4">Till 32 years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">PwD (with General)</td>
                  <td className="p-4 font-bold text-purple-600">9 attempts</td>
                  <td className="p-4">Till 42 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              💡 Important Point
            </h3>
            <p className="text-gray-700">
              The number of attempts is counted from the year you first appear
              for Prelims, regardless of whether you clear it or not. If you
              skip a year, that doesn't give you an extra attempt later.
            </p>
          </div>

          {/* Exam Fees */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Banknote className="w-7 h-7 text-purple-600" />
            4. Examination Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                General/OBC/EWS Candidates
              </h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₹100
              </div>
              <p className="text-gray-700 text-sm">
                One-time fee (non-refundable)
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                SC/ST/PwD/Women Candidates
              </h4>
              <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
              <p className="text-gray-700 text-sm">
                No examination fee required
              </p>
            </div>
          </div>

          {/* Reservation */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-7 h-7 text-purple-600" />
            5. Reservation Policy
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left font-bold">Category</th>
                  <th className="p-4 text-left font-bold">
                    Reservation Percentage
                  </th>
                  <th className="p-4 text-left font-bold">Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">SC (Scheduled Caste)</td>
                  <td className="p-4 font-bold text-purple-600">15%</td>
                  <td className="p-4 text-sm">
                    Age relaxation, Extra attempts, Lower cutoff
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">ST (Scheduled Tribe)</td>
                  <td className="p-4 font-bold text-purple-600">7.5%</td>
                  <td className="p-4 text-sm">
                    Age relaxation, Unlimited attempts, Lower cutoff
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    OBC (Other Backward Classes)
                  </td>
                  <td className="p-4 font-bold text-purple-600">27%</td>
                  <td className="p-4 text-sm">
                    Age relaxation, Extra attempts, Lower cutoff
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    EWS (Economically Weaker Section)
                  </td>
                  <td className="p-4 font-bold text-purple-600">10%</td>
                  <td className="p-4 text-sm">Lower cutoff in some cases</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    PwD (Persons with Disabilities)
                  </td>
                  <td className="p-4 font-bold text-purple-600">
                    4% (Horizontal)
                  </td>
                  <td className="p-4 text-sm">
                    Age relaxation, Extra attempts, Scribe facility
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Nationality */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. Nationality Requirements
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 mb-8">
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>For IAS, IPS, and IFS:</strong> Candidate must be a
                citizen of India
              </p>
              <p>
                <strong>For other services:</strong> Candidate must be either:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A citizen of India, OR</li>
                <li>A subject of Nepal, OR</li>
                <li>A subject of Bhutan, OR</li>
                <li>
                  A Tibetan refugee who came to India before January 1, 1962, OR
                </li>
                <li>
                  A person of Indian origin who has migrated from Pakistan,
                  Burma, Sri Lanka, East African countries, etc., with intention
                  to permanently settle in India
                </li>
              </ul>
            </div>
          </div>

          {/* Physical Standards */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            7. Physical Standards
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
            <p className="text-gray-700 mb-4">
              Physical standards are required{" "}
              <strong>only for certain services</strong> like IPS, IFS (for
              certain posts), and some Group B services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  For Male Candidates (IPS):
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    • Height: Minimum 165 cm (157.5 cm for ST/Scheduled Areas)
                  </li>
                  <li>• Chest: 84 cm (unexpanded), 89 cm (expanded)</li>
                  <li>• Vision: 6/6 or 6/9 (correctable to 6/6)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  For Female Candidates (IPS):
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    • Height: Minimum 150 cm (147.5 cm for ST/Scheduled Areas)
                  </li>
                  <li>• No chest measurement requirement</li>
                  <li>• Vision: 6/6 or 6/9 (correctable to 6/6)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-4 italic">
              Note: Most other services like IAS, IRS, IA&AS do not have
              physical standards
            </p>
          </div>

          {/* Other Conditions */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            8. Other Conditions
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>
                  <strong>Good Character:</strong> Must be of good character and
                  sound health
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>
                  <strong>Medical Fitness:</strong> Must pass medical
                  examination after final selection
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>
                  <strong>No Criminal Record:</strong> Should not have been
                  convicted of any criminal offense
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>
                  <strong>Language Proficiency:</strong> Must have adequate
                  knowledge of English and one Indian language
                </span>
              </li>
            </ul>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            To be eligible for UPSC CSE: Age 21-32 (relaxation for reserved
            categories), Bachelor's degree from recognized university, 6
            attempts for General (more for reserved), Fee ₹100 (free for
            SC/ST/PwD/Women), Indian citizen required for IAS/IPS/IFS. Check
            official notification for latest updates.
          </p>
        </KeyTakeawayBox>

        {/* <div className="my-8 text-center">
          <PDFExportButton title="UPSC Eligibility Criteria" />
        </div> */}

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "Career Services & Prospects",
            href: "/new-to-upsc/career-services",
          }}
        />

        {/* Final Page CTA */}
        <div className="mt-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
          <p className="text-lg mb-6">
            You've completed the entire UPSC beginner's guide. Now you're ready
            to start your preparation journey!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses/upsc"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Back to Hub
            </Link>
            {/* <Link
              href="#"
              className="px-8 py-4 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-800 transition-all duration-300 hover:scale-105"
            >
              Explore Our Courses
            </Link> */}
          </div>
        </div>
      </article>
    </div>
  );
}

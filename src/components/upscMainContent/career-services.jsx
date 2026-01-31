import React from "react";
import { Breadcrumb } from "../breadcrumb";
import { ProgressIndicator } from "../progress-indicator";
import { PrevNextNavigation } from "../prev-next-navigation";
import { KeyTakeawayBox } from "../key-takeaway-box";
import { RelatedResources } from "../releated-resources";
import { PDFExportButton } from "../pdf-export-button";
import { Award, Star, Briefcase } from "lucide-react";

export default function CareerServicesPage() {
  const breadcrumbItems = [
    { label: "New to UPSC", href: "/courses/upsc" },
    { label: "Career Services" },
  ];

  const resources = [
    {
      title: "What is UPSC CSE",
      href: "/new-to-upsc/what-is-upsc-cse",
      icon: "book",
    },
    {
      title: "Eligibility Criteria",
      href: "/new-to-upsc/eligibility-criteria",
      icon: "book",
    },
    {
      title: "UPSC Service Allocation",
      href: "https://www.upsc.gov.in",
      icon: "file",
      external: true,
    },
  ];

  const topServices = [
    {
      rank: 1,
      name: "Indian Administrative Service (IAS)",
      role: "District administration, policy formulation, implementation of government programs",
      prestige: "Highest - District Collector, Secretary to Government",
      isPremium: true,
    },
    {
      rank: 2,
      name: "Indian Foreign Service (IFS)",
      role: "Diplomacy, representing India in foreign countries, international negotiations",
      prestige: "Highest - Ambassadors, High Commissioners",
      isPremium: true,
    },
    {
      rank: 3,
      name: "Indian Police Service (IPS)",
      role: "Law and order, crime investigation, internal security",
      prestige: "Highest - SP, DGP, CBI, Intelligence agencies",
      isPremium: true,
    },
  ];

  const otherServices = [
    {
      name: "Indian Revenue Service (IRS-IT)",
      dept: "Income Tax Department",
      focus: "Tax administration, financial investigations",
    },
    {
      name: "Indian Revenue Service (IRS-C&CE)",
      dept: "Central Board of Indirect Taxes",
      focus: "Customs, GST, preventing smuggling",
    },
    {
      name: "Indian Audit & Accounts Service (IA&AS)",
      dept: "CAG Office",
      focus: "Auditing government accounts",
    },
    {
      name: "Indian Defence Accounts Service (IDAS)",
      dept: "Ministry of Defence",
      focus: "Defence financial management",
    },
    {
      name: "Indian Civil Accounts Service (ICAS)",
      dept: "Controller General of Accounts",
      focus: "Civil ministry accounts",
    },
    {
      name: "Indian Railway Traffic Service (IRTS)",
      dept: "Ministry of Railways",
      focus: "Commercial operations, passenger services",
    },
    {
      name: "Indian Railway Personnel Service (IRPS)",
      dept: "Ministry of Railways",
      focus: "HR management in Railways",
    },
    {
      name: "Indian Railway Accounts Service (IRAS)",
      dept: "Ministry of Railways",
      focus: "Railway financial management",
    },
    {
      name: "Indian Defence Estate Service (IDES)",
      dept: "Ministry of Defence",
      focus: "Defence land management",
    },
    {
      name: "Indian Information Service (IIS)",
      dept: "Ministry of Information & Broadcasting",
      focus: "Media management, public communication",
    },
    {
      name: "Indian Trade Service (ITS)",
      dept: "Ministry of Commerce",
      focus: "International trade, WTO negotiations",
    },
    {
      name: "Indian Corporate Law Service (ICLS)",
      dept: "Ministry of Corporate Affairs",
      focus: "Company law, corporate governance",
    },
    {
      name: "Indian Postal Service (IPoS)",
      dept: "Department of Posts",
      focus: "Postal operations, financial services",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <ProgressIndicator
        currentStep={6}
        totalSteps={7}
        title="Career Services & Prospects"
      />

      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UPSC Career Services: IAS, IPS, IFS & 20+ Service Options Explained
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1">⏱️ 7-minute read</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The UPSC Civil Services Examination offers entry to{" "}
            <strong>
              24 different All India Services and Central Services
            </strong>
            . Each service has its unique role, responsibilities, and career
            progression. Your final rank determines which service you can
            choose.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Service Allocation Process
            </h3>
            <p className="text-gray-700">
              Services are allocated based on your final rank (Mains + Interview
              marks) and preferences filled by you. The top 3 services (IAS,
              IFS, IPS) are the most prestigious and typically go to top
              rankers. However, every service offers excellent career
              opportunities and the chance to serve the nation.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-7 h-7 text-yellow-500" />
            Top 3 Most Prestigious Services
          </h2>

          {topServices.map((service) => (
            <div
              key={service.rank}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 mb-6 shadow-lg relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {service.rank}
              </div>
              <div className="ml-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-700">
                  <strong className="text-purple-600">Role:</strong>{" "}
                  {service.role}
                </p>
                <p className="text-gray-700">
                  <strong className="text-purple-600">Prestige:</strong>{" "}
                  {service.prestige}
                </p>
                {service.isPremium && (
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      ★ MOST PRESTIGIOUS
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-purple-600" />
            Other Group A Central Services
          </h2>

          <p className="text-gray-700 mb-6">
            In addition to the top 3 All India Services, UPSC CSE offers entry
            to 21 more Central Services. Each provides excellent career growth,
            job security, and the opportunity to contribute to national
            development.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {index + 4}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Department:</strong> {service.dept}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Focus:</strong> {service.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              And More Services:
            </h3>
            <p className="text-gray-700">
              The list also includes services like Indian Ordnance Factories
              Service (IOFS), Indian Communication Finance Service, Indian P&T
              Accounts & Finance Service, Armed Forces Headquarters Civil
              Service, and several others - totaling{" "}
              <strong>24 services</strong> in all.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Service Selection Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                🎯 Your Final Rank
              </h4>
              <p className="text-gray-700 text-sm">
                Higher ranks get first preference. IAS typically goes to ranks
                1-50, IFS to 50-100, IPS to 100-200 (varies by year)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                📋 Your Preferences
              </h4>
              <p className="text-gray-700 text-sm">
                You fill a preference form listing services in order. Allocation
                tries to match your preference with your rank
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                📊 Available Vacancies
              </h4>
              <p className="text-gray-700 text-sm">
                Number of vacancies varies by service each year. Popular
                services have fewer vacancies and higher cutoffs
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                🎓 Reservation Policy
              </h4>
              <p className="text-gray-700 text-sm">
                SC/ST/OBC/EWS/PwD reservations apply. Reserved category
                candidates may get preferred services at lower ranks
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Career Prospects
          </h2>
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              What All Services Offer:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Job Security:</strong> Permanent government position
                  with tenure till retirement (60 years)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Attractive Pay:</strong> Starting salary
                  ~₹56,000/month + HRA, TA, DA (increases significantly with
                  promotions)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Perks & Benefits:</strong> Government accommodation,
                  vehicle, medical facilities, pensions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Career Growth:</strong> Regular promotions based on
                  seniority and performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Respect & Prestige:</strong> High social status and
                  respect across the country
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl flex-shrink-0">★</span>
                <span>
                  <strong>Opportunity to Serve:</strong> Directly contribute to
                  national development and public welfare
                </span>
              </li>
            </ul>
          </div>
        </div>

        <KeyTakeawayBox>
          <p className="font-bold text-lg">
            UPSC CSE offers 24 services including the prestigious IAS, IFS, and
            IPS. Service allocation depends on your final rank and preferences.
            All services provide excellent career prospects, job security,
            attractive compensation, and the opportunity to serve the nation at
            the highest levels.
          </p>
        </KeyTakeawayBox>
        {/* 
        <div className="my-8 text-center">
          <PDFExportButton title="UPSC Career Services" />
        </div> */}

        <RelatedResources resources={resources} />

        <PrevNextNavigation
          prev={{
            title: "Personality Test Guide",
            href: "/new-to-upsc/interview-guide",
          }}
          next={{
            title: "Eligibility Criteria",
            href: "/new-to-upsc/eligibility-criteria",
          }}
        />
      </article>
    </div>
  );
}
